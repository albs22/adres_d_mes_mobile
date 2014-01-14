Ext.define('CleanTucson.view.Main', {
	extend: 'Ext.Panel',
	xtype: 'homePanel2',
	alias: 'widget.home',
	cls: 'main-panel',

	config: {
		html: "<img class='main-img' src='resources/images/512.jpg'  />",
		items: [
			{
				xtype: 'toolbar',
				title: 'Address D Mess',
				id: 'mainBar',
				docked: 'top',
				items: [{
					align: 'left',
					iconCls: 'home',
					iconMask: true,
					action: 'toolBarHome'
				}]
			},
			
			{
				xtype: 'panel',
				docked: 'bottom',
				layout: {
					type: 'hbox',
					pack: 'center'
				},
				items: [
					{
						xtype: 'button',
						html: "<img class='button-image' src='resources/images/mapicon2.png' /> <p>Map</p>",
		                id: 'btnMap',
		                cls: 'main-button',      
					},
					{
						xtype: 'button',
						html: "<img class='button-image' src='resources/images/listicon.png' /> <p>List</p>",
						id: 'btnVioList',
						cls: 'main-button'
					},
					{
						xtype: 'button',
						html: "<img class='button-image' src='resources/images/submitmess.png' /> <p>Submit</p>",
						id: 'btnSubmitVio',
						cls: 'main-button',
					} 
				]
			}
			]	
	}	
	
});
