import { HexRowTuple } from '@visual-wolf/components/lib/hex-field';
import { HexField } from '@visual-wolf/components/lib/hex-field';

import './backdrop.css';

const HEX_COLOR = '#444444';

export function Backdrop() {
  const rowDef: HexRowTuple[] = [
    [0, 2],
    [0, 3],
    [0, 3],
    [1, 2]
  ]
  return (
    <div className='backdrop'>
      <div className='backdrop__upper-left-hex'>
        <HexField size={8} color={HEX_COLOR} rowDefs={rowDef} />
      </div>
      <div className='backdrop__lower-right-hex'>
        <HexField size={8} color={HEX_COLOR} rowDefs={rowDef} />
      </div>
    </div>
  );
}
