Ext.define('CleanTucson.view.MapContainer', {
	extend: 'Ext.navigation.View',
	xtype: 'mapNavView',
	requires: [
		'CleanTucson.view.Map',
		'CleanTucson.view.Detail'
	],
	
	config: {
		navigationBar: false,
		items: [
			{
				xtype: 'toolbar',
				title: 'Locate A Mess',
				docked: 'top',
				items: [
					{
						align: 'left',
    					iconCls: 'home',
    					iconMask: true,
    					id: 'btnMapHome',
    					action: 'toolBarMapHome',
					}, {
						align: 'left',
		    			iconCls: 'arrow_left',
		    			iconsMask: true,
		    			id: 'btnMapBack',
		    			action: 'mapBack',
		    			hidden: true,
					},{
						xtype: 'spacer'
					}, {
						align: 'right',
						iconMask: true,
						iconCls: 'refresh',
						action: 'mapRefresh',
					}, {
						align: 'right',
						text: 'Details',
						id: 'btnMapDetail',
						disabled: true			
					}, {
						align: 'right',
		    			text: 'Update',
		    			itemId: 'btnDetailUpdateMap',
		    			ui: 'confirm',
		    			hidden: true,
		    			action: 'detailUpdateMap'
					}
				]
			
		}, {
			
			xtype: 'mainMap'
		}]	
	}
});