Ext.define('CleanTucson.view.SelectLocation', {
	extend: 'Ext.Map',
	xtype: 'selectLocataionMap',
	
	requires: ['Ext.util.GeoLocation'],
	
	config: {
		items: [{
			title: 'Select Location',
			xtype: 'mainTitleBar'
		},
		{
			
		}],
		
		xtype: 'map',	
	}	
});
