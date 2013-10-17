Ext.define('CleanTucson.view.MapDetail', {
	extend: 'Ext.Panel',
	xtype: 'violationMapDetail',
	
	config: {
		/*
		items: [{ 
		
			xtype: 'toolbar',
        	//xtype: 'titlebar',
  			title: 'Violation List',
    		docked: 'top',
    		layout: {
    			//pack: 'justify'
    			//align: 'left'
    		},
    		items: [
    		
    		{
    			align: 'left',
    			iconCls: 'home',
    			iconMask: true,
    			action: 'toolBarHome',
    			
    		}, 
    		
    		{
    			align: 'left',
    			iconCls: 'arrow_left',
    			iconsMask: true,
    			id: 'btnDetailBack',
    			hidden: true,
    			
    		},	
    		
    		{
    			xtype: 'spacer'
    		},
    		
    		
    		{
    			align: 'right',
    			text: 'Update',
    			itemId: 'btnDetailUpdate',
    			ui: 'confirm',
    			hidden: true,
    			
    		}],
		
		*/
		
		
		
		items: [{
			xtype: 'datepickerfield',
			name: 'submitedDate',
			label: 'Entered Date',				
			itemId: 'enteredDateDetail'
		},
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
					value: 'bitItem'
				}
			]
			
		},
		{
			xtype: 'togglefield',
			label: 'Cleaned Up',
			value: 0,
			itemId: 'toggleFieldDetail'
		}
		
		
		
		]
		
		//	}]
		
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
