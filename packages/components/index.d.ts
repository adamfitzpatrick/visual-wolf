import { DOMAttributes } from 'react';
import { Header } from './lib/header';
import { Hex } from './lib/hex';
type CustomElement<T> = Partial<T & DOMAttributes<T> & {
    children: any;
}>;
declare global {
    namespace JSX {
        interface IntrinsicElements {
            ['vwolf-header']: CustomElement<Header>;
            ['vwolf-hex']: CustomElement<Hex>;
        }
    }
}
export {};
