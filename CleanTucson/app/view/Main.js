Ext.define('CleanTucson.view.Main', {
	extend: 'Ext.Panel',
	xtype: 'homePanel2',
	
	config: {
		
		items: [
			{
				title: 'CleanTucson',
				xtype: 'mainTitleBar'
			},
			{
				xtype: 'button',
                text: 'New',
                id: 'new',
                cls: 'main-button'
			},
			{
				xtype: 'panel',
				layout: {type: 'vbox', pack: 'center' },

				items:  [{
								xtype: 'button',
								text: 'Launch Map',
								id: 'buttonMap',
								cls: 'main-button',
								align: 'center',
								width: 150,
					
							},
							{
								xtype: 'spacer',
								height: 100,
								
							},
							{
								xtype: 'button',
								text: "World",
								cls: 'main-button',
								align: 'center',
								width: 150,
								
							}]
			}]	
	}	
	
});
