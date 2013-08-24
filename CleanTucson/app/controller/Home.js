Ext.define('CleanTucson.controller.Home', {
	extend: 'Ext.app.Controller',

	config: {
	    control: {
	    	
	    	'#new': {
                // On the tap event, call onNewTap
                tap: 'onNewTap'
           }
      },
	},
	
	 launch: function() {
    	console.log('Launch');
        // When our controller is launched, create an instance of our User view and add it to the viewport
        // which has a card layout
        Ext.Viewport.add(Ext.create('CleanTucson.view.Main'));
    },

    onNewTap: function() {
    	console.log('Test Button');
        // When the user taps on the button, create a new reference of our New view, and set it as the active
        // item of Ext.Viewport
        Ext.Viewport.setActiveItem(Ext.create('CleanTucson.view.Map'));
        console.log('Map Shown');
       // this.addMarker();
    },
    
    mapController: function(googlemap) {
    	console.log('map control');
          //adding a marker to the map
        var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(32.2800, -111.01),
                    title : 'testing',
                    map: googlemap,
                    animation: google.maps.Animation.BOUNCE,
                });

        //setting the center of map, in this case: LatLng(20.5167, 46.2167)
       // googlemap.setCenter(new google.maps.LatLng(20.5167, 46.2167));
    },

});
