Ext.define('CleanTucson.view.SubmitContainer', {
	extend: 'Ext.navigation.View',
	xtype: 'submitContainer',
	requires: ['CleanTucson.view.Submit'],
	
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
			xtype: 'violationSubmit'
		}]
		
	}
	
});
