Ext.define('CleanTucson.controller.List', {
	extend: 'Ext.app.Controller',
	
	routes: {
		'mess/:id': 'onBtnBackTap',
		'list': 'onBtnBackTap'
	},
	
	config: {
		refs: {	
      		listView: 			'violist',
      		listNavView: 		'listNavView',
      		btnBack: 			'button[action=listBack]',
      		btnUpdate:     		'button[action=detailUpdate]',
      		btnListHome:		'button[action=toolBarListHome]',
      		btnListRefresh:		'button[action=listRefresh]',
      		btnListFilter:		'button[action=listFilter]',
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
            btnListRefresh: {
            	tap: 'refreshList'
            },
            btnListFilter: {
            	tap: 'filterList'
            },
            "picker[itemId=vioPicker]": {
        		change: 'onFilterChanged'
    		}
      		
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
		this.getBtnListRefresh().setHidden(true);
	
		console.log("Record urlId: " + record.get('id'));
		
	
		var history = this.getApplication().getHistory();
    	history.add(new Ext.app.Action({
    		url: "mess/" + record.get('id')
    	}), true);
	
	
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
		
		if (this.getListNavView()) {
			var viewId = this.getListNavView().getActiveItem().getId();
			console.log(viewId);
			if (viewId.indexOf("violationDetail") != -1) {
				this.getBtnBack().setHidden(true);
				this.getBtnListHome().setHidden(false);
			}
	
			this.getBtnListRefresh().setHidden(false);
			this.getBtnUpdate().setHidden(true);
			this.getListNavView().pop();
		}
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
	
	refreshList: function() {
		Ext.StoreMgr.get('Violations').load();
	},
	
	filterList: function() {
		if (!this.picker) {
			this.picker = Ext.Viewport.add([Ext.create('CleanTucson.view.FilterSelector')]);
			this.picker.show();
		} else {
			this.picker.show();
		}
	},
	
	onFilterChanged: function() {
		console.log('it changed');
	}
	
});
