Ext.define('CleanTucson.controller.Create', {
	extend: 'Ext.app.Controller',
	
	
	
	
	config: {
		refs: {
			latField:   {selector: 'violationSubmit #latField' 			},
			lngField:   {selector: 'violationSubmit #lngField' 			},
			tabPanel:   {selector: 'submitContainer #submitTabPanel' 	},
			pictureTab: {selector: 'submitContainer #submitPictureTab'	},
			formTab:	{selector: 'submitContainer #subitFormTab'		},
			btnNext:	{selector: 'submitContainer #btnSubmitNext'		}
			
		},
		
		control: {
			'#btnSelectLocation': {
				tap: 'onSelectLocation'
			},
			
			'#btnSubmitNext': {
				tap: 'onSubmitNext'
			}
		}	
	},
	
	//Button Handlers
	
	onSelectLocation: function() {
		console.log("Tap select location");
		Ext.Viewport.setActiveItem('selectLocataionMap');
		
	},
	
	onSubmitNext: function() {
		console.log('Submit Next');
		
		var tp = this.getTabPanel();
		console.log(tp);
		//var activeTab = tp.getActiveTab();
		
		
		var tabIndex = tp.items.indexOf(tp.getActiveTab());
		//activeTab.items.indexOf(activeTab);
		
		console.log(tabIndex);
		if (tabIndex == 0) {
			console.log("Set Active: 1");
			var pt = this.getPictureTab();
			tp.setActiveTab(1);
			//pt.show();
			//tp.setActiveItem(pt);
			
		} 
		else if (tabIndex == 1) {
			var ft = this.getFormTab();
			
			tp.setActiveTab(2);
			//ft.show();
		}
		else if (tabIndex ==2) {
			
		}
		
		
	},
	
	onTabLoad: function(context) {
		console.log('On tab load');
		
		
		var tp = this.getTabPanel();//Ext.getCmp(tabPanel);//context;//context.getTabPanel();
		var tabIndex = tp.items.indexOf(tp.getActiveTab());
		var bn = this.getBtnNext();
		
		if (tabIndex == 2) {
			
			bn.setText('Submit');
			bn.setUi('confirm');
		}
		else {
			bn.setText('Next');
			bn.setUi('forward');
		}
		
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
