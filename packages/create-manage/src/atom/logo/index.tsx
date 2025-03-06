import { PropsWithoutRef } from 'react';
import classnames from 'classnames';

import './logo.css';

interface LogoProps {
  inline?: boolean;
  scale?: number;
  white?: boolean;
  flat?: boolean;
}

export function Logo(props: PropsWithoutRef<LogoProps>) {
  const classNames = classnames('logo', {
    white: props.white,
    flat: props.flat
  });
  const scale = props.scale || 1.0;
  const style = { fontSize: `${3.5 * scale}rem`};
  if (props.inline) {
    return <span className={classNames} style={style} >GridWolf</span>
  } else {
    return <div className={classNames} style={style} >GridWolf</div>
  }
}
