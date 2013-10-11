Ext.define('CleanTucson.view.SelectLocation', {
	extend: 'Ext.Map',
	xtype: 'selectLocataionMap',
	
	requires: ['Ext.util.GeoLocation'],
	
	config: {
		xtype: 'map',	
		id: 'submitMap',
		getLocation: true,
		userCurrentLocation: true,
		mapOptions: {
			zoom: 12,
    		center: new google.maps.LatLng(32.2500, -111.0071), 
    		mapTypeId: google.maps.MapTypeId.ROADMAP
		},
		listeners: {
			maprender : function(comp, map) {
				console.log("Map Render");
				var thisMap=this.getMap();
              // and then we pass the map to controller as function argument.
               CleanTucson.app.getController('Create').createMapController(thisMap);
			}
			
			
		}	
	}	
});
