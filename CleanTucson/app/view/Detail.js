Ext.define('CleanTucson.view.Detail', {
	extend: 'Ext.Panel',
	xtype: 'violationDetail',
	//autoCreate: true,
	
	config: {
		title: 'Details',
		listeners: {
		 	initialize:function(){
		 		//Fire event to populate Detail view data
         	   this.fireEvent('onPopulateDetail', this.getData());
			}
		},
		//tpl: [ '{type}'],
		
		
		
		
		items: [
		/*
		{
			xtype: 'datepickerfield',
			name: 'submitedDate',
			label: 'Entered Date',				
			itemId: 'enteredDateDetail'
		},
		*/
		/*
		{
			xtype: 'textfield',
			name: 'latitude',
			label: 'Latitude',
			itemId: 'latFieldDetail',
			
		},
		{
			xtype: 'textfield',
			name: 'longitude',
			label: 'Longitude',
			itemId: 'lngFieldDetail'
		},
		
		*/
		{
			xtype: 'textfield',
			name: 'address',
			label: 'Address',
			itemId: 'addressFieldDetail'
		},
		{	
			xtype: 'textareafield',
			name: 'decription',
			label: 'Description',
			itemId: 'descriptionFieldDetail',
		},
		{
			xtype: 'selectfield',
			name: 'type',
			label: 'Type',
			itemId: 'selectFieldDetail',
			options: [
				{
					text: 'Weeds',
					value: 'weeds'
				},
				{
					text: 'Mess',
					value: 'mess',
				},
				{
					text: 'Big Item',
					value: 'bigitem'
				}
			]
			
		},
		{
			xtype: 'togglefield',
			name: 'status',
			label: 'Cleaned Up',
			value: 0,
			id: 'toggleFieldDetail'
		},
		{
			
		},
		
		
		{
			xtype:'panel',
			layout: {
				type: 'hbox',
				pack: 'center'
			},
			items: [{
				xtype: 'panel',
				id: 'beforeImgPanel'
			}, {
				xtype: 'button',
				action: 'showFullImage',
				text: 'Full Image',
				margin: '10 10 20 10'
			}]
		}
		
		
		
		
		
		
		
		]
		
	}
		
		
		
		
		
		
		/*
		items: [{
			xtype: 'toolbar',
			title: 'Address the Mess',
		    id: 'mainBar',
			dock: 'top',
			items: [{
				align: 'left',
				iconCls: 'home',
				iconMask: true,
				action: 'toolBarHome'
			}]
		}]
		*/
		
	
	
});
