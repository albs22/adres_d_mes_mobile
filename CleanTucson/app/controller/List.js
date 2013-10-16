Ext.define('CleanTucson.controller.List', {
	extend: 'Ext.app.Controller',
	
	config: {
		refs: {	
      		listView: 		'violist',
      		listPanel: 		'listPanel',
      		btnBack: 		'#btnDetailBack',
      		btnUpdate:     	'#btnDetailUpdate',
      		dateEnteredField:		'#enteredDateDetail',
      		latField: 		'#latFieldDetail',
      		lngField: 		'#lngFieldDetail',
      		addressField:	'#addressFieldDetail',
      		descriptionField: '#descriptionFieldDetail',
      		selectField:	'#selectFieldDetail',
      		toggleField:	'#toggleFieldDetail'
      		
		},
		
		control: {
      		'list' : {
       			 disclose: 'onListItemTap'
      		},
      		'#btnDetailBack': {
      			tap: 'onBtnBackTap'
      		}
		}
	},
	
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
   		
   		this.getDateEnteredField().setValue(record.get('dateEntered'));
   		this.getLatField().setValue(record.get('lat'));
   		this.getLngField().setValue(record.get('lng'));
   		this.getAddressField().setValue(record.get('address'));
   		this.getDescriptionField().setValue(record.get('description'));
   		this.getSelectField().setValue(record.get('type'));
   		var toggle = this.getToggleField();
   		
   		if (record.get('status') == "closed") {
   			toggle.setValue(1);
   		}
   		
   			
	},
	
	onBtnBackTap: function() {
		console.log('Back tap');
		this.getBtnBack().setHidden(true);
		this.getBtnUpdate().setHidden(true);
		this.getListPanel().pop();
	},
	
	
});
