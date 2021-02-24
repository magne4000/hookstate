import { Plugin, State } from '@hookstate/core';
export interface UntrackedExtensions<S> {
    get(): S;
    produce(fn: any): void;
}
export declare function Untracked(): Plugin;
export declare function Untracked<S>($this: State<S>): UntrackedExtensions<S>;
