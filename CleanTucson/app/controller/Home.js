Ext.define('CleanTucson.controller.Home', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			homeButton: 'button[action=toolBarHome]',
			storeButton: 'button[action=testStore]',
			mapInfoContainer: {selector: 'map #mapDetail'},
			testPanel:  {selector: 'homePanel2 #testPanel'},
			homeTitleBar: {selector:'homePanel2 #mainBar' }
		},
		
	    control: {
	    	
	    	'#new': {
                // On the tap event, call onNewTap
                tap: 'onNewTap'
           },
           '#btnVioList': {
           		tap: 'onVioListTap'
           },
           '#btnSubmitVio': {
           		tap: 'onSubmitVioTap'
           },
           homeButton: {
           		tap: 'goHome'
           },
           
           storeButton: {
           		tap: 'onStoreTest'
           }
      }
	},
	
	 launch: function() {
    	console.log('Launch');
        // When our controller is launched, create an instance of our User view and add it to the viewport
        // which has a card layout
        Ext.Viewport.add(Ext.create('CleanTucson.view.Main'));
    },

    onNewTap: function() {
    	console.log('Test Button');
        
         //The map view is being auto created so it only has to set active here
         Ext.Viewport.setActiveItem('mymap');
        
        //Ext.Viewport.setActiveItem(Ext.create('CleanTucson.view.Map'));
        console.log('Map Shown');
       // this.addMarker();
    },
    
    mapController: function(googlemap) {
    	
    	//console.log(mapInfoContainer);
    	//Ext.ComponentQuery.query('#mapDetail').setHtml("Detail Says Hello");
    	//Ext.getCmp("#mapDetail").setHtml("Shit");
    	//var mi = CleanTucson.view.Map.items.get(1);
    	//mi.update("Wow");
    	
    	//console.log(this);
    	//var p = this.getMapInfoContainer()
    	//console.log(p);
    	//p.setHtml("Why??")
    	
    	var panelRef = this.getMapInfoContainer();
    	
    	
    	
    	console.log('map control');
    	var violationList = Ext.getStore('Violations');
    	
    	
    	for (var i = 0, ln = violationList.getCount(); i < ln; i++) {
    		console.log(violationList.getAt(i));
    		addMarker(violationList.getAt(i));
    	}
    	
    	function addMarker(violation) {
    		var latLng = new google.maps.LatLng(violation.get('lat'), violation.get('lng'));
    		
    		//create new marker
    		var marker = new google.maps.Marker({
    			position: latLng,
    			map: googlemap,
    			title: violation.get('type')
    		});
    		
    		var popup;
    		
    		var infoWindowConent = '<div class="infowindow-content">' +
    			'<ul>' +
    				'<li>Type: ' + violation.get('type') + '</li>' +
    			'</ul> </div>';
    				
    		//mapInfoContainer.html = "Hello Map World"
    		
    		
    		
    		//Create popup on marker click
    		google.maps.event.addListener(marker, 'click', function() {
    			//context.getmapInfoContainer().setHtml('Hello Map World');
    			
    			//Ext.ComponentQuery.query('#mapDetail').update("Detail Says Hello");
    			//md.update('Hellp Map Detail');
    			//var me = this; 
				//var labelfield = me.getmapInfoContainer(); 
				//labelfield.setHtml('it is changing');
				
				
				//var mapViolationDetailHtml
				
    			
    			panelRef.setHtml(violation.get('description'));
    			
    			popup.setContent(infoWindowConent);
    			popup.open(googlemap, marker);
    		});
    		
    		popup = new google.maps.InfoWindow();
    	}
    	
    	
    	
          //adding a marker to the map
        //var marker = new google.maps.Marker({
                 //   position: new google.maps.LatLng(32.2800, -111.01),
                  //  title : 'testing',
                 //   map: googlemap,
                 //   animation: google.maps.Animation.BOUNCE
              //  });
                
         //add all violations to map
                
               
        //setting the center of map, in this case: LatLng(20.5167, 46.2167)
       // googlemap.setCenter(new google.maps.LatLng(20.5167, 46.2167));
    },
    
    
    goHome: function() {
    	console.log('Go Home');
    	 Ext.Viewport.setActiveItem('home');
    	 
    },
    
    onStoreTest: function() {
    	console.log('Store Test');
    	
    	//testPanel.setHtml('WHYYY');
    	//Ext.ComponentQuery.query('homePanel2 #testPanel').pdate('Hello');
    	//console.log(CleanTucson.view.Main.items.get(1));
    	console.log(this);
    	var p = this.getTestPanel();
    	p.setHtml("Why??");
    	
    	var vioStore = Ext.getStore("Violations");
    	console.log('Number of Violations: ' + vioStore.getCount()); 
    	var firstRecord = vioStore.getAt(0);
  
    	console.log('Violation #1: ' + firstRecord.get('description'));
    },
    
    onVioListTap: function() {
    	console.log("Show violation list");
    	Ext.Viewport.setActiveItem('listPanel');
    },
    
    onSubmitVioTap: function() {
    	console.log('Show violation submit');
    	Ext.Viewport.setActiveItem('submitContainer');
    }

});
