
import { Plugin, State } from '@hookstate/core';

export interface UntrackedExtensions<S> {
    get(): S;
    produce(fn: any): void;
}

const PluginID = Symbol('Untracked');
export function Untracked(): Plugin;
export function Untracked<S>($this: State<S>): UntrackedExtensions<S>;
export function Untracked<S>($this?: State<S>): Plugin | UntrackedExtensions<S> {
    if ($this) {
        const th = $this as State<S>;
        const [_, controls] = th.attach(PluginID);
        return {
            get: () => controls.getUntracked(),
            produce: (v) => controls.produceUntracked(v),
        }
    }
    return {
        id: PluginID,
        init: () => ({})
    }
}
