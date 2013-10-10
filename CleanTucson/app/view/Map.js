Ext.define('CleanTucson.view.Map', {
    extend: 'Ext.Map',
    alias: 'widget.mymap',
    xtype: 'mapContainer',
    autoCreate: true,
    requires: [
    	//'Ext.Titlebar',
    	'Ext.util.GeoLocation'
    ],
    
    config: {
     
    	items: [{
    				title: 'Map',
    				xtype: 'mainTitleBar'
    	},
    	{
    		xtype: 'panel',
    		docked: 'bottom',
    		height: 100,
    		html: 'Hello Bottom Map Panel',
    		id: 'mapDetail',
    		autoCreate: true
    	}],

    			title: 'map',
    			iconcls: 'maps',
    			xtype: 'map',
    			userCurrentLocation: false,
    			getLocation: false,
    			id: 'googlemap',
    			
    			mapOptions: {
    				zoom: 9,
    				center: new google.maps.LatLng(32.2500, -111.0071), 
    				mapTypeId: google.maps.MapTypeId.ROADMAP,
    			},
    			
    			listeners: {
    							maprender : function(comp, map) {
    							//this is where we get the map from view.
                				var thisMap=this.getMap();
                 				// and then we pass the map to controller as function argument.
                				CleanTucson.app.getController('Home').mapController(thisMap);
    						}
    			}
    }

});

   




