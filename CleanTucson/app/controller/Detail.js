Ext.define('CleanTucson.controller.Detail', {
	extend: 'Ext.app.Controller',
	
	config: {
		refs: {
			detailView: 		'violationDetail',
			listNavView:		'listNavView',
			addressField:		'#addressFieldDetail',
      		descriptionField: 	'#descriptionFieldDetail',
      		selectField:		'#selectFieldDetail',
      		toggleField:		'#toggleFieldDetail',
      		imageBeforePanel: 	'#beforeImgPanel',
      		imageAfterPanel: 	'#afterImgPanel',
      		img:				'fullimg',
      		btnBack: 			'button[action=listBack]',
      		btnUpdate:     		'button[action=detailUpdate]',
      		btnUpdateMap: 		'button[action=detailUpdateMap]',
      		btnBeforeImg:		'button[action=showBeforeImg]',
      		btnAfterImg:		'button[action=showAfterImg]'
		},
		
		control: {
			detailView: {
				onPopulateDetail :  'populateDetailData'
			},
			
			btnBeforeImg: {
				tap: 'onShowFullImage'
			},
			btnAfterImg: {
				tap: 'onAfterImg'
			}
		}
	},
	
	 populateDetailData: function(record) {
	 	console.log('Populate view data');
	 	console.log(record);
	 	//console.log(record.lat);
	 	
	 	//set Detail view field values
	 	this.getAddressField().setValue(record.violation_address);
	 	this.getDescriptionField().setValue(record.description);
	 	
	 	
	 	//Set mess type
	 	var messType;
	 	
	 	if(typeof record.violation_type != 'undefined') {
	 		messType = record.violation_type.toLowerCase();
		 	
		 	if (messType.indexOf('mess') != -1) {
	   			this.getSelectField().setValue('mess');
	   		}
	   		
	   		if (messType.indexOf('bigitem') != -1) {
	   			this.getSelectField().setValue('bigitem');
	   		}
	   		
	   		if(messType.indexOf('weeds') != -1) {
	   			this.getSelectField().setValue('weeds');
	   		}
   		}
   		
   		if(record.status == 'closed') {
   			this.getToggleField().setValue(1);
   		}
   		
   		//Display thumbnail image
   		if (record.image_before_url_t) {
   			this.getImageBeforePanel().setHtml("<img style='height: 100px;' src='" + record.image_before_url_t + "' />");
   		}
   		
   		if (!record.image_after_url_t === "") {
   			this.getBtnAfterImg().setText("Full Image");
   			this.getImageAfterPanel().setHtml("<img style='height: 100px;' src='" + record.image_after_url_t + "' />");
   		} else {
   			this.getBtnAfterImg().setText("Add After Image");
   		}
   		
	 },
	 
	 onShowFullImage: function() {
		console.log('Full Image');
		
		
		this.getImg().setHtml("<img style='height: 500px;' src='" + this.imgBeforeUrl + "' />");
		
		
		this.getListNavView().push({
	      		xtype: 'fullimg',
	      		title: 'Image',
	   	}); 
   	/*
   		 var history = this.getApplication().getHistory();
    	history.add(new Ext.app.Action({
    		url: 'camera'
    	}), true);
   	
   	
   		Ext.Viewport.setActiveItem('cameraContainer');
   	*/
   		
   		this.getBtnUpdate().setHidden(true);
   		this.getBtnBack().setHidden(false);
   		
   		var imageBeforeUrl = this.imgBeforeUrl;
   		
   		//if (imageBeforeUrl != null) {
   		//	this.getImg().setHtml("<img style='width: 100%;' src='" + imageBeforeUrl + "' />");
   		//}
	},
	
	onAfterImg: function() {
		console.log("After Image");
		
		this.getListNavView().push({
      		xtype: 'cameraContainer',
      		title: 'Camera'
   		});
	}
	
	
	
});
