Ext.define('CleanTucson.view.Main', {
	extend: 'Ext.Panel',
	xtype: 'homePanel2',
	alias: 'widget.home',
	
	config: {
		
		items: [
			{
				
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
			},
			{
				xtype: 'button',
                text: 'Launch Map',
                id: 'new',
                cls: 'main-button'
			},
			{
				xtype: 'button',
				text: 'Store Test',
				id:'btnStoreTest'
				
			},
			{
				xtype: 'button',
				text: 'List Test',
				id: 'btnVioList'
			},
			{
				xtype: 'button',
				text: 'Submit Violation',
				id: 'btnSubmitVio'
			},
			{
				xtype: 'panel',
				itemId: 'testPanel',
				layout: {type: 'vbox', pack: 'center' },

				items:  [
							{
								xtype: 'spacer',
								height: 100
								
							},
							{
								xtype: 'button',
								text: "World",
								cls: 'main-button',
								align: 'center',
								width: 150,
								action: 'testStore'
								
							}]
			}]	
	}	
	
});
