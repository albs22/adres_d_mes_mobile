Ext.define('CleanTucson.view.MapDetail', {
	extend: 'Ext.Panel',
	xtype: 'violationMapDetail',
	
	config: {
		
		items: [
		
			{ 
		
				xtype: 'toolbar',
	        	//xtype: 'titlebar',
	  			title: 'Detail',
	    		docked: 'top',
	    		layout: {
	    			//pack: 'justify'
	    			//align: 'left'
	    		},
	   		
    		
    		items: [
    		
	    		{
	    			align: 'left',
	    			id: 'btnMapDetailBack',
    				iconCls: 'arrow_left',
    				iconsMask: true,
	    			listeners: {
	    				tap: function() {
	    					console.log('Map Detail Back');
	    					Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);  
    						Ext.Viewport.setActiveItem('mymap');
	    				}
	    			}
	    			
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
		
		
		
		},
		/*
		
		{
			xtype: 'datepickerfield',
			name: 'submitedDate',
			label: 'Entered Date',				
			id: 'enteredDateMapDetail'
		},
		{
			xtype: 'textfield',
			name: 'latitude',
			label: 'Latitude',
			id: 'latFieldMapDetail',
			
		},
		{
			xtype: 'textfield',
			name: 'longitude',
			label: 'Longitude',
			id: 'lngFieldMapDetail'
		},
		*/
		{
			xtype: 'textfield',
			name: 'address',
			label: 'Address',
			id: 'addressFieldMapDetail'
		},
		{	
			xtype: 'textareafield',
			name: 'decription',
			label: 'Description',
			id: 'descriptionFieldMapDetail',
		},
		{
			xtype: 'selectfield',
			name: 'type',
			label: 'Type',
			id: 'selectFieldMapDetail',
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
		/*
		{
			xtype: 'togglefield',
			label: 'Cleaned Up',
			value: 0,
			id: 'toggleFieldMapDetail'
		},
		*/
		{
			xtype:'panel',
			layout: {
				type: 'hbox',
				pack: 'center'
			},
			items: [{
				xtype: 'panel',
				id: 'beforeImgPanelMap'
			}, 
			/*
			{
				xtype: 'button',
				action: 'showFullImage',
				text: 'Full Image',
				margin: '10 10 20 10'
			}
			*/
			]
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
