Ext.define('CleanTucson.controller.Detail', {
	extend: 'Ext.app.Controller',
	
	config: {
		refs: {
			detailView: 		'violationDetail',
			addressField:		'#addressFieldDetail',
      		descriptionField: 	'#descriptionFieldDetail',
      		selectField:		'#selectFieldDetail',
      		toggleField:		'#toggleFieldDetail',
      		imageBeforePanel: 	'#beforeImgPanel',
      		imageAfterPanel: 	'#afterImgPanel',
      		img:				'#fimg'
		},
		
		control: {
			detailView: {
				onPopulateDetail :  'populateDetailData'
			},
			
			'button[actio=showFullImage]': {
				tap: 'onShowFullImage'
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
   		
   		/*
   		if (record.image_after_url_t) {
   			this.getImageAfterPanel().setHtml("<img style='height: 100px;' src='" + record.image_after_url_t + "' />");
   		}
   		*/
   	
	 },
	 
	 onShowFullImage: function() {
		console.log('Full Image');
		
		this.getListNavView().push({
      		xtype: 'fullimg',
      		title: 'Image',
   		});
   		
   		this.getBtnUpdate().setHidden(true);
   		this.getBtnBack().setHidden(false);
   		
   		var imageBeforeUrl = this.imgBeforeUrl;
   		
   		if (imageBeforeUrl != null) {
   			this.getImg().setHtml("<img style='width: 100%;' src='" + imageBeforeUrl + "' />");
   		}
   		
	}
	
	
	
});
