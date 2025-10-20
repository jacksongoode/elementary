/* TypeScript file generated from HashUtils.res by genType. */

/* eslint-disable */
/* tslint:disable */

import * as HashUtilsJS from './HashUtils.bs.js';

import type {list} from '../src/shims/RescriptPervasives.shim';

export const hashString: (seed:number, s:string) => number = HashUtilsJS.hashString as any;

export const hashNode: (kind:string, props:{[id: string]: string}, children:list<number>) => number = HashUtilsJS.hashNode as any;

export const hashMemoInputs: (props:{ readonly memoKey: string }, children:list<number>) => number = HashUtilsJS.hashMemoInputs as any;
