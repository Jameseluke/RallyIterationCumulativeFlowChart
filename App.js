Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    config: {
        
    },
    launch: function() {
        this.iterationCombobox = this.add({
        cls: 'iteration',
        xtype: 'rallyiterationcombobox',
        stateful: true,
        stateId: this.getContext().getScopedStateId('priority'),
        listeners: {
            ready: this._onIterationComboboxLoad,
            select: this._onIterationComboboxChanged,
            scope: this
        }
    });
        //API Docs: https://help.rallydev.com/apps/2.1/doc/
    },
    
    _onIterationComboboxLoad: function(){
        console.log(this.iterationCombobox.getQueryFromSelected());
    },
    
    _onIterationComboboxChanged: function() {
        console.log(this.iterationCombobox.getQueryFromSelected());
    }
});
