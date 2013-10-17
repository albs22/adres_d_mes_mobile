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
			xtype: 'toolbar',
			docked: 'top',
			title: 'Map',
			layout: {
				pack: 'justify'
			},
			items: [{
				iconCls: 'home',
				iconMask: true,
				action: 'toolBarHome'
			}, { xtype: 'spacer' }, 
			{
				text: 'Details',
				id: 'btnMapDetail',
				disabled: true
			}]
    	},
    	{
    		xtype: 'panel',
    		docked: 'bottom',
    		height: 100,
    		html: "<div id='map-vio-detail-container'>" +
						"<table class='vio-table'>" +
    					"  <tr class='vio-row'>" +
      					"	<td class='vio-type'>Address</td>" +
      					"   <td class='vio-data-left'></td>" +
      					"  	<td class='vio-type'>Status</td>" +
      					"	<td class='vio-data-right'></td>" +
      					"  </tr>" +
      					"  <tr class='vio-row'>" +
      					"	<td class='vio-type'>Description</td>" +
      					"	<td class='vio-data-left'></td>" +
      					"	<td class='vio-type'>Type</td>" +
      					"   <td class='vio-data-right'></td>" +
      					"  </tr>" +
      					"</table>" +
      					"</div>",
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

   




