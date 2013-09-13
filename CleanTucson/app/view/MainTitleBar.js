Ext.define('CleanTucson.view.MainTitleBar', {
	extend: 'Ext.TitleBar',
	xtype: 'mainTitleBar',
	requires: ['Ext.TitleBar'],
	
	config: {
		
		items: [{
			docked: 'top',
			xtype: 'titlebar',
			
			items: [{
				align: 'left',
				iconCls: 'home',
				iconMask: true,
				action: 'toolBarHome'
			}]
		}]
	}
});