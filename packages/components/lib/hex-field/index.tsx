import { HEX_ASPECT_RATIO, Hex } from '../hex';
import React, { CSSProperties} from 'react';

const ROOT_BASE_SIZE = 16;
const ADJUST_X = 6;

export type HexRowTuple = [ number, number ]; // [ hexes_to_indent_row, hex_count_in_row ]

export interface HexFieldProps {
  size: number;
  color: string;
  rowDefs: HexRowTuple[]
}

export function HexField(props: React.PropsWithoutRef<HexFieldProps>) {
  function getElement(row: number, col: number, offset: number) {
    const unitWidth = props.size * ROOT_BASE_SIZE;
    const unitHeight = props.size * ROOT_BASE_SIZE / HEX_ASPECT_RATIO;
    const horizOffset = row % 2 === 0 ? offset * unitWidth - (offset * ADJUST_X) : (offset + 0.5) * unitWidth - (offset + 0.5) * ADJUST_X;
    const vertOffset = unitHeight * 9 / 32;
    const styles: CSSProperties = {
      position: 'absolute',
      top: `${row * unitHeight - row * vertOffset}px`,
      left: `${col * unitWidth - col * ADJUST_X + horizOffset}px`
    }
    return <Hex size={props.size} color={props.color} customStyles={styles} key={`${row},${col}`} />;
  }

  function getRow(rowTuple: HexRowTuple, rowIndex: number) {
    const items = [];
    const offset = rowTuple[0];
    const colCount = rowTuple[1];
    for (let k = 0; k < colCount; k++) {
      items.push(getElement(rowIndex, k, offset))
    }
    return items;
  }

  function getRows() {
    return props.rowDefs.map((rowTuple, row) => <div key={row}>{getRow(rowTuple, row)}</div>)
  }

  return (
    <div className='hex-field'>
      {getRows()}
    </div>
  )
}
