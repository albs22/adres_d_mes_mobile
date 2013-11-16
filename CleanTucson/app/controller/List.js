Ext.define('CleanTucson.controller.List', {
	extend: 'Ext.app.Controller',
	
	config: {
		refs: {	
      		listView: 			'violist',
      		listNavView: 		'listNavView',
      		btnBack: 			'button[action=listBack]',
      		btnUpdate:     		'button[action=detailUpdate]',
      		btnListHome:		'button[action=toolBarListHome]',
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
      		},
      		btnListHome: {
           		tap: 'goHome'
           },
      		
		}
	},
	
	 goHome: function() {
    	console.log('Go Home');
    	 Ext.Viewport.setActiveItem('home');
    	 
    },
	
	//Show detail page
	onListItemTap: function(list, record) {
		console.log('List Item Tap');
	
		this.getBtnBack().setHidden(false);
		this.getBtnUpdate().setHidden(false);
		this.getBtnListHome().setHidden(true);
	
    	this.getListNavView().push({
      		xtype: 'violationDetail',
      		title: 'Details',
      		data: record.getData()
   		});
   		
   		//this.currentViolationId = record.get('id');
   		//this.getDateEnteredField().setValue(record.get('dateEntered'));
   		//this.getLatField().setValue(record.get('lat'));
   		//this.getLngField().setValue(record.get('lng'));
   		//this.getAddressField().setValue(record.get('violation_address'));
   		//this.getDescriptionField().setValue(record.get('description'));
   		//this.getSelectField().setValue(record.get('type'));	
	},
	
	onBtnBackTap: function() {
		console.log('Back tap');
		
		var viewId = this.getListNavView().getActiveItem().getId();
		console.log(viewId);
		if (viewId.indexOf("violationDetail") != -1) {
			this.getBtnBack().setHidden(true);
			this.getBtnListHome().setHidden(false);
		}

		this.getBtnUpdate().setHidden(true);
		this.getListNavView().pop();
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
		
	}
	
});
