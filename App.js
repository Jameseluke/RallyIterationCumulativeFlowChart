Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    config: {
        
    },
    launch: function() {
        EndDate = new Date();
        this.iterationCombobox = this.add({
        cls: 'iteration',
        xtype: 'rallyiterationcombobox',
        stateful: true,
        stateId: this.getContext().getScopedStateId('priority'),
        listeners: {
            ready: this._onIterationCombobox,
            select: this._onIterationCombobox,
            scope: this
        }
    });
    this.add({
            xtype: 'container',
            itemId: 'reportContainer'
        });
        //API Docs: https://help.rallydev.com/apps/2.1/doc/
    },
    
    _onIterationCombobox: function(combobox){
        console.log('iteration', combobox.getValue());
        if (Ext.ComponentQuery.query('rallystandardreport[itemId=report]')[0]) {
            console.log('report exists');
            Ext.ComponentQuery.query('#reportContainer')[0].remove(Ext.ComponentQuery.query('rallystandardreport[itemId=report]')[0], true);
        }
        this.down('#reportContainer').add({
            xtype: 'rallystandardreport',
            itemId: 'report',
            width: this.getBox()["width"] - 20,
            height: this.getBox()["height"] - 30,
            reportConfig: {
                report: 'IterationCumulativeFlowDiagram',
                iterations: combobox.getValue(),
                            legend: 'hide',
            }
        });
    }
});
