Ext.define('CleanTucson.view.Main', {
	extend: 'Ext.Panel',
	xtype: 'homePanel2',
	alias: 'widget.home',
	cls: 'main-panel',
	
	config: {
		
		items: [
			{
				xtype: 'toolbar',
				title: 'Address D Mess',
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
				xtype: 'container',
				docked: 'bottom',
				
				layout: {
					type: 'vbox',
					//pack: 'justify'
				},
				items: [
					{
						xtype: 'button',
						html: "<img class='button-image' src='resources/images/mapicon2.png' /> <p>Map</p>",
		                id: 'new',
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
			}]	
	}	
	
});
