var PluginID = Symbol('Untracked');
function Untracked($this) {
    if ($this) {
        var th = $this;
        var _a = th.attach(PluginID), _1 = _a[0], controls_1 = _a[1];
        return {
            get: function () { return controls_1.getUntracked(); },
            produce: function (v) { return controls_1.produceUntracked(v); },
        };
    }
    return {
        id: PluginID,
        init: function () { return ({}); }
    };
}

export { Untracked };
//# sourceMappingURL=index.es.js.map
