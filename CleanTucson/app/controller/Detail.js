Ext.define('CleanTucson.controller.Detail', {
	extend: 'Ext.app.Controller',
	
	config: {
		refs: {
			detailView: 		'violationDetail',
			addressField:		'#addressFieldDetail',
      		descriptionField: 	'#descriptionFieldDetail',
      		selectField:		'#selectFieldDetail',
      		toggleField:		'#toggleFieldDetail'	
		},
		
		control: {
			detailView: {
				onPopulateDetail :  'populateDetailData'
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
	 }
	
	
	
});
