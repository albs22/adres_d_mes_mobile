Ext.define('CleanTucson.controller.Create', {
	extend: 'Ext.app.Controller',
	require: ['CleanTucson.model.Violation'],
	
	
	
	
	config: {
		  models: [
            'Violation'
        ],
        stores: [
            'Violations'
        ],
		refs: {
			latField:   	{selector: 'violationSubmit #latField' 			},
			lngField:   	{selector: 'violationSubmit #lngField' 			},
			tabPanel:   	{selector: 'submitContainer #submitTabPanel' 	},
			pictureTab: 	{selector: 'submitContainer #submitPictureTab'	},
			formTab:		{selector: 'submitContainer #subitFormTab'		},
			btnNext:		'button[action=createNext]',
			btnCreateHome:  'button[action=toolBarCreateHome]',
			formRef: 	'violationSubmit',
			btnPhoto: 	'#btnPhoto',
			btnDelete:  '#btnDelete',
			img:		'#img',
			imgContainer: '#imgContainer'
			
		},
		
		control: {
			'#btnSelectLocation': {
				tap: 'onSelectLocation'
			},
			
			'#btnSubmitNext': {
				tap: 'onSubmitNext'
			},
			'button[action=capture]': {
				tap: 'capturePhoto'
			},
			'button[action=delete]': {
				tap: 'deletePhoto'
			},
			btnCreateHome: {
				tap: 'goHome'
			}
		}	
	},
	
	//Button Handlers
	goHome: function() {
		 Ext.Viewport.setActiveItem('home');
	},
	
	
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
			//Submit Mess
			console.log('Submit');
			var formValues = this.getFormRef().getValues();
			console.log(formValues);
			
			var photoComponent = this.getImg();
			var imgSrc = photoComponent.getSrc();
			
			//var imgSrc = 'iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAABEJAAARCQBQGfEVAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAASESURBVHic7d0xaFx1AMfx73tPklYQqdDJIrTg5JTkn4iLTg4WXOpW0xLXTtIh4tZNzeTkHKpmEbsIdXBRl2L6v8sgQrFgQerUIYpQm8K955CrSO+u78/l3XtJf7/PEsj97//+5P/lXu6Fy8uqqiJFCGEOOAecBZaB08B80pNt1vaAO8BN4DpwLcb4MOWJWUoAIYQ1YAM4Of0arUX3gPUY42bdwCcGEEIogKvA+caWZm3aAi7GGAeTBjxTM8Em3vyj7DxQAhcmDcgnPTB82V9tfk3WstXhXo419hQQQngWuAucmN26rEW7wKkY4/3HH5j0CvAu3vynyQn293TEpADent1arCNj93RSAIszXIh1Y+yejvwOEEKYBx4kTDgAfht+te4UwJnh1zrHYox7///GuLeBxxMP3Isxvpo41mYohPATsJIw9Dj7Vw3/M/FtYIK0a8jWhqn34iAB2FPAAYhzAOIcgDgHIM4BiHMA4hyAOAcgzgGIcwDiHIA4ByDOAYhzAOIcgDgHIM4BiHMA4hyAOAcgzgGIq/t4+EysrKy8UZblW3Xjqqr6qtfr9erGhRAuAS81sriO5Hn+7fb29g9tH7eTAMqyfA34IGHoLaA2AOAicKQ/pFKW5Z9A6wH4FCDOAYhzAOIcgDgHIM4BiHMA4hyAuE4uBA0Gg6+LorhVNy7Lsn7KfGVZrud5/sLBV9adwWDwSxfH7SSAnZ2d28Dtpubr9/s/NjWXGp8CxDkAcQ5AnAMQ5wDEOQBxDkCcAxDnAMQ5AHEOQJwDEOcAxHXy18ClpaX3syy7kjD0UoxxK2G+77IsWz74yrpTVdWVXq/3advH7SSALMuOAc/Xjauqai5xvudS5jvMhj+T1vkUIM4BiHMA4hyAOAcgzgGIcwDiOrkOUFXVgyzL/qobl2XZw8T5/k6Z7zCrqirldr2N6ySA4RWvxq569Xq9N5uaS41PAeIcgDgHIM4BiHMA4hyAOAcgzgGIcwDiHIA4ByDOAYhzAOI6+WvgwsLCy0VRvJIwtB9j/L1u0OLi4utPw7+JG/73tFZ1EkBRFO8AH9WNq6rqPWCzblye5xsc8RtGFEXxIfBx28f1KUCcAxDnAMQ5AHEOQJwDEOcAxDkAcZ1cCMrz/EZZlp8kDP05ccqrwPfTr6h7eZ7f6OK4nQQwvEduY7dJjTF+1tRcanwKEOcAxDkAcQ5AnAMQ5wDEOQBxDkCcAxDnAMQ5AHEOQJwDEOcAxDkAcQ5AnAMQ5wDEOQBxDkCcAxDnAMQdJICssVXYQU29F+M+F/BP4nOXQgi/AoNpD26NKIAziWNH9jarqmpkVAjhLvDiwdZlh8wfMcZTj39z0imgP+PFWPvG7umkAL6Z4UKsG2P3dFIAXwK7s1uLtWyX/T0dMTaAGON94PIsV2Stujzc0xFjfwl8JITwObA6q1VZK76IMV6Y9GDddYA1YKvR5Vibttjfw4me+ArwSAhhDdgATjaxKpu5e8B6jHGzbmBSAAAhhDngHHAWWAZOA/PTr9EatAfcAW4C14FrMcak2+7+C7M98WRTzhp3AAAAAElFTkSuQmCC';
			
			
			
			
			console.log(imgSrc);
			
			var newVio = Ext.create('CleanTucson.model.Violation', {
				lat: formValues.latitude,
				lng: formValues.longitude,
				violation_type: formValues.type,
				description: formValues.description,
				violation_address: formValues.address,
				image_before: imgSrc,
				status: 'open'
			});
			
				
			console.log(newVio);
				console.log(formValues.type);
			var store = Ext.getStore('Violations');
			store.add(newVio);
			store.sync();
			
			
			Ext.Viewport.remove(Ext.Viewport.getActiveItem(),true);
			Ext.Viewport.setActiveItem('home');
			
	
	/*
      Ext.Ajax.request({
        url:  'http://0.0.0.0:3000/api/violations/',
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
         params: JSON.stringify({
        //   violation: [{
	          lat: '32',
	          long: '-110',
	          violation_type: 'Mess',
	          violation_address: 'Catillina'
	      //  }]
         }),
        
        /*
        params: {
          violation: [{
          'lat': '32',
          long: '-110',
          violation_type: 'Mess',
          violation_address: 'Catillina'
         }]
         
        /*
          violation: [{
            violation_address: formValues.address,
            lat: formValues.latitude,
            long: formValues.longitude,
            violation_type: formValues.type
            */
          
        //},
        /*
        success: function(response) {
          console.log('Success: ' + response.responseText);
        },

        failure: function(response) {
          console.log('Failure: ' + response.responseText);
         }
      });
			
		*/	
			 
				
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
		
		
	},
	
	// function to replace destroyed image
    createImg   : function () {
        var me = this,
            imgContainer = me.getImgContainer(),
            img;

        img = {
            xtype  : 'image',
            itemId : 'img',
            height : 400
        };

        imgContainer.add(img);
    },
    
     capturePhoto : function () {
     	
     	/*
     	document.addEventListener("deviceready", onDeviceReady, false);

		function onDeviceReady() {
				console.log('On Device Ready');
				  var networkState = navigator.connection.type;
				  console.log('Net state');
				  console.log(networkState);
		    	navigator.camera.getPicture(onSuccess, onFail, { quality: 50 }); 
		}
     	
     	
     
		
		function onSuccess(imageData) {
		    var image = document.getElementById('myImage');
		    image.src = "data:image/jpeg;base64," + imageData;
		    console.log(image.src);
		}
		
		function onFail(message) {
		    alert('Failed because: ' + message);
		}
		*/
     	
     
        var me = this,
            pictureSource, // picture source
            destinationType, // sets the format of returned value
            btnDelete = me.getBtnDelete(),
            photoComponent = me.getImg();

        // Wait for Cordova to connect with the device
        document.addEventListener("deviceready", onDeviceReady, false);

        // Take picture using device camera and retrieve image as base64-encoded string
        navigator.camera.getPicture(
            onPhotoDataSuccess,
            onFail, {
                quality : 50, destinationType : destinationType.DATA_URL
            });
            

        /*-------------- Helper Functions -------------- */
       
        function onDeviceReady () {
        	
        	
        	console.log('On Device Ready');
            pictureSource =  navigator.camera.PictureSourceType;
            destinationType = navigator.camera.DestinationType;
        }

        function onPhotoDataSuccess (imageData) {
            var imgSrc = 'data:image/jpeg;base64,'.concat(imageData);

            photoComponent.setSrc(imgSrc);

            //hide delete button
            btnDelete.setHidden(false);
        }

        // Called if something bad happens.
        function onFail (message) {
            alert('Failed because: ' + message);
        }
        
    },
    
    deletePhoto : function () {
        var me = this,
            img = me.getImg(),
            deleteBtn = me.getBtnDelete();

        img.destroy();
        me.createImg(); //replace destroyed img component
        deleteBtn.setHidden(true);
    },
    
	
	
	
});
