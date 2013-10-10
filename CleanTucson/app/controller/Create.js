Ext.define('CleanTucson.controller.Create', {
	extend: 'Ext.app.Controller',
	
	
	
	config: {
		
		control: {
			'#btnSelectLocation': {
				tap: 'onSelectLocation'
			}
		}	
	},
	
	onSelectLocation: function() {
		console.log("Tap select location");
		Ext.Viewport.setActiveItem('selectLocataionMap');
		
	},
	
	createMapController: function(googlemap) {
		console.log("In map controller");
		
		google.maps.event.addListener(googlemap, 'click', function(e){
			console.log(event);
			console.log("Lat: " + e.latLng.lat());
			console.log("Lng: " + e.latLng.lng());
		});
		
	}
	
	
	
});
