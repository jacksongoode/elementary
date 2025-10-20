/* TypeScript file generated from Reconciler.res by genType. */

/* eslint-disable */
/* tslint:disable */

import * as ReconcilerJS from './Reconciler.bs.js';

import type {t as NodeRepr_t} from './NodeRepr.gen';

export abstract class RenderDelegate_t { protected opaque!: any }; /* simulate opaque types */

export const renderWithDelegate: <T1,T2>(delegate:RenderDelegate_t, graphs:NodeRepr_t[], rootFadeInMs:T1, rootFadeOutMs:T2) => void = ReconcilerJS.renderWithDelegate as any;
