import { DOMAttributes } from 'react';
import { Header } from './lib/header';
export { Header } from './lib/header';

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['vwolf-header']: CustomElement<Header>;
    }
  }
}
