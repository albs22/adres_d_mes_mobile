Ext.define('CleanTucson.view.ListContainer', {
    extend: 'Ext.navigation.View',
    xtype: 'listPanel',
    requires: [
        'CleanTucson.view.ViolationList',
        'CleanTucson.view.Detail'
    ],

    config: {
    	navigationBar: false,
        items: [{
        	xtype: 'toolbar',
  			title: 'Violation List',
    		dock: 'top',
    		items: [{
    			align: 'left',
    			iconCls: 'home',
    			iconMask: true,
    			action: 'toolBarHome'
    		}]
  		},
        {
            xtype: 'violationList'
        }]
    }
});