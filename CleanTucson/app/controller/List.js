Ext.define('CleanTucson.controller.List', {
	extend: 'Ext.app.Controller',
	
	config: {
		refs: {	
      		listView: 			'violist',
      		listPanel: 			'listPanel',
      		btnBack: 			'button[action=listBack]',
      		btnUpdate:     		'button[action=detailUpdate]',
      		dateEnteredField:	'#enteredDateDetail',
      		latField: 			'#latFieldDetail',
      		lngField: 			'#lngFieldDetail',
      		addressField:		'#addressFieldDetail',
      		descriptionField: 	'#descriptionFieldDetail',
      		selectField:		'#selectFieldDetail',
      		toggleField:		'#toggleFieldDetail',
      		imageBeforePanel: 	'#beforeImgPanel',
      		imageAfterPanel: 	'#afterImgPanel',
      		img:				'#fimg'
      		
		},
		
		control: {
      		'list' : {
       			 disclose: 'onListItemTap'
      		},
      		'#btnDetailBack': {
      			tap: 'onBtnBackTap'
      		},
      		btnUpdate: {
      			tap: 'onBtnDetailUpdateTap'
      		},
      		
      		'button[action=showFullImage]': {
      			tap: 'onShowFullImage'
      			
      		}
      		
		}
	},
	
	//Show detail page
	onListItemTap: function(list, record) {
		console.log('List Item Tap');
		
		//Ext.Viewport.SetActiveItem('violationDetail');
		/*
		
		Ext.Viewport.add({
			xtype: 'violationDetail',
			title: 'Details',
    			align: 'left',
			datea: record.getData()
    			align: 'left',
    			align: 'left',
		});
		*/
		this.getBtnBack().setHidden(false);
		this.getBtnUpdate().setHidden(false);
		
		//lp = this.getListPanel();
		//lp.getBtn
		
    	this.getListPanel().push({
      		xtype: 'violationDetail',
      		title: 'Vio Detail',
      		data: record.getData()
   		});
   		
   		
   		console.log(record);
   		
   		this.currentViolationId = record.get('id');
   		//this.getDateEnteredField().setValue(record.get('dateEntered'));
   		//this.getLatField().setValue(record.get('lat'));
   		//this.getLngField().setValue(record.get('lng'));
   		this.getAddressField().setValue(record.get('violation_address'));
   		this.getDescriptionField().setValue(record.get('description'));
   		//this.getSelectField().setValue(record.get('type'));
   		
   		var vtype = record.get('violation_type').toLowerCase();
   		
   		console.log(vtype);
   		
   		
   		if (vtype.indexOf('mess') != -1) {
   			this.getSelectField().setValue('mess');
   		}
   		
   		if (vtype.indexOf('bigitem') != -1) {
   			this.getSelectField().setValue('bigitem');
   		}
   		
   		if(vtype.indexOf('weeds') != -1) {
   			this.getSelectField().setValue('weeds');
   		}
   		
   		
   		
   		
   		this.imgBeforeUrl = record.get('image_before_url_f');
   		var imageBeforeUrl = record.get('image_before_url_t');
   		//var imageAfterUrl = record.get('image_after_url');
   		
   		if (imageBeforeUrl != null) {
   			this.getImageBeforePanel().setHtml("<img style='height: 100px;' src='" + imageBeforeUrl + "' />");
   		}
   		
   		/*
   		if (imageAfterUrl != null) {
   			this.getImageAfterPanel().setHtml("<img style='height: 100px;' src='" + imageAfterUrl + "' />");
   		}
   		*/
   		
   		
   		
   		var toggle = this.getToggleField();
   		
   		if (record.get('status') == "closed") {
   			toggle.setValue(1);
   		}
   		
   			
	},
	
	onBtnBackTap: function() {
		console.log('Back tap');
		
		var viewId = this.getListPanel().getActiveItem().getId();
		console.log(viewId);
		if (viewId.indexOf("violationDetail") != -1) {
			this.getBtnBack().setHidden(true);
		}

		this.getBtnUpdate().setHidden(true);
		this.getListPanel().pop();
	},
	
	onBtnDetailUpdateTap: function() {
		console.log("Detail Update");
		
		//var formValues = this.getFormRef().getValues();
		//console.log(formValues);
		/*	
		var updatedVio = Ext.create('CleanTucson.model.Violation', {
				lat: formValues.latitude,
				lng: formValues.longitude,
				violation_type: formValues.type,
				description: formValues.description,
				violation_address: formValues.address,
				status: formValues.status
		});
		*/
		
		var store = Ext.getStore('Violations');
		
		console.log(this.currentViolationId);
		var index = store.findExact('id', this.currentViolationId);
		var record = store.getAt(index);
		console.log(record);
		
		var statusValue = this.getToggleField().getValue();
		console.log(statusValue);
		
		if (statusValue == 0) {
			statusValue = 'open';
		}		
		else {
			statusValue = 'closed';
		}
		
		record.set({status: statusValue});
		console.log(store);
		//store.getProxy().setExtraParams = {
		//	id: this.currentViolationId
		//};
		var curUrl = store.getProxy().getUrl();
		curUrl = curUrl + '/' + this.currentViolationId;
		console.log(curUrl);
		store.getProxy().setUrl(curUrl);
		
		
		store.sync();
		
		
	},
	
	onShowFullImage: function() {
		console.log('Full Image');
		
		this.getListPanel().push({
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
