Ext.define('CleanTucson.controller.Create', {
	extend: 'Ext.app.Controller',
	
	
	
	
	config: {
		refs: {
			latField: {selector: 'violationSubmit #latField' },
			lngField: {selector: 'violationSubmit #lngField' }
			
		},
		
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
		
		var latFieldRef = this.getLatField();
		var lngFieldRef = this.getLngField();
		
		
		
		google.maps.event.addListener(googlemap, 'click', function(e){
			console.log(event);
			console.log("Lat: " + e.latLng.lat());
			console.log("Lng: " + e.latLng.lng());
			addMarker(e.latLng);			
			
		});
		
		var marker;
		
		function addMarker(latLng) {
			console.log("add maker");
			
			if (marker) {
				marker.setPosition(latLng);
			} else {
				marker 	= new google.maps.Marker({
					position: latLng,
					map: googlemap
				});
			}
			
			latFieldRef.setValue(latLng.lat());
			lngFieldRef.setValue(latLng.lng());
		}
		
		
	}
	
	
	
});
