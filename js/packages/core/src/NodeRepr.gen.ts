/* TypeScript file generated from NodeRepr.res by genType. */

/* eslint-disable */
/* tslint:disable */

import * as NodeReprJS from './NodeRepr.bs.js';

import type {list} from '../src/shims/RescriptPervasives.shim';

import type {ref as PervasivesU_ref} from './PervasivesU.gen';

export abstract class props { protected opaque!: any }; /* simulate opaque types */

export type t = {
  readonly symbol: string; 
  readonly hash: number; 
  readonly kind: string; 
  readonly props: props; 
  readonly outputChannel: number; 
  readonly children: list<t>
};

export type shallow = {
  readonly symbol: string; 
  readonly hash: number; 
  readonly kind: string; 
  readonly props: props; 
  readonly outputChannel: number; 
  readonly generation: PervasivesU_ref<number>
};

export const create: (kind:string, props:{}, children:t[]) => t = NodeReprJS.create as any;

export const isNode: <T1>(a:{ readonly symbol: T1 }) => boolean = NodeReprJS.isNode as any;

export const shallowCopy: (node:t) => shallow = NodeReprJS.shallowCopy as any;
