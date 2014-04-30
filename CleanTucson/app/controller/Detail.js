Ext.define('CleanTucson.controller.Detail', {
	extend: 'Ext.app.Controller',
	
	config: {
		refs: {
			detailView: 		'violationDetail',
			listNavView:		'listNavView',
			addressField:		'#addressFieldDetail',
      		descriptionField: 	'#descriptionFieldDetail',
      		submittedDateField:	'#submittedDateDetail',
      		selectField:		'#selectFieldDetail',
      		toggleField:		'#toggleFieldDetail',
      		imageBeforePanel: 	'#beforeImgPanel',
      		imageAfterPanel: 	'#afterImgPanel',
      		img:				'fullimg',
      		btnBack: 			'button[action=listBack]',
      		btnUpdate:     		'button[action=detailUpdate]',
      		btnUpdateMap: 		'button[action=detailUpdateMap]',
      		btnBeforeImg:		'button[action=showBeforeImg]',
      		btnAfterImg:		'button[action=showAfterImg]',
      		btnListRefresh:		'button[action=listRefresh]',
      		btnListFilter:		'button[action=listFilter]'
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
	 	this.getSubmittedDateField().setValue(record.date_submitted);
	 	
	 	
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
   		console.log("Image Before: " + record.image_before_url_t);
   		console.log("char at: " + record.image_before_url_t.charAt(0));
   		
   		
   		if (record.image_before_url_t != ""){
			this.getBtnBeforeImg().setHidden(false);
   			this.imgBeforeUrl = record.image_before_url_f;
   			this.getImageBeforePanel().setHtml("<img style='height: 100px;' src='" + record.image_before_url_t + "' />");
		} else {
				//Before image not found use default thumbnail
				this.getBtnBeforeImg().setHidden(true);
				this.getImageBeforePanel().setHtml("<img style='height: 100px;' src='resources/images/missing_thumb.png' />");
   		}
   		
   		console.log("Image After: " + record.image_after_url_t);
   		if (record.image_after_url_t != "" && record.image_after_url_t.charAt(0) != "/") {
		    this.imgAfterUrl = record.image_after_url_f;
   			this.getBtnAfterImg().setText("Full Image");
   			this.getImageAfterPanel().setHtml("<img style='height: 100px;' src='" + record.image_after_url_t + "' />");
   		} else {
   			this.getBtnAfterImg().setText("Add After Image");
   		}
   		
	 },
	 
	 onShowFullImage: function() {
		console.log('Full Image');
		
		this.getListNavView().push({
	      		xtype: 'fullimg',
	      		title: 'Image',
	   	}); 
	   	
	   	this.getImg().setHtml("<img style='height: 500px;' src='" + this.imgBeforeUrl + "' />");
   	
   		
   		this.getBtnUpdate().setHidden(true);
   		this.getBtnBack().setHidden(false);
   		this.getBtnListRefresh().setHidden(true);
   		this.getBtnListFilter().setHidden(true);
   		
   		var imageBeforeUrl = this.imgBeforeUrl;
   		
   		//if (imageBeforeUrl != null) {
   		//	this.getImg().setHtml("<img style='width: 100%;' src='" + imageBeforeUrl + "' />");
   		//}
	},
	
	onAfterImg: function() {
		console.log("After Image");
		
		this.getListNavView().push({
      		xtype: 'cameraContainer',
      		title: 'Camera',
      		imgUrl: ''
   		});


	   	this.getImg().setHtml("<img style='height: 500px;' src='" + this.imgAfterUrl + "' />");

			this.getBtnUpdate().setHidden(true);
			this.getBtnBack().setHidden(false);
	}
	
	
	
});
