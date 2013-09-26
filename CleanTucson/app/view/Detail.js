Ext.define('CleanTucson.view.Detail', {
	extend: 'Ext.Panel',
	xtype: 'violationDetail',
	autoCreate: true,
	
	config: {
		
		title: 'Details',
		tpl: [ '{type}']
		/*
		items: [{
			xtype: 'toolbar',
			title: 'Address the Mess',
		    id: 'mainBar',
			dock: 'top',
			items: [{
				align: 'left',
				iconCls: 'home',
				iconMask: true,
				action: 'toolBarHome'
			}]
		}]
		*/
		
	}
	
});
