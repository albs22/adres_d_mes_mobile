Ext.define('CleanTucson.view.ListContainer', {
    extend: 'Ext.navigation.View',
    xtype: 'listPanel',
    requires: [
        'CleanTucson.view.ViolationList',
        'CleanTucson.view.Detail'
    ],

    config: {
    	navigationBar: false,
        items: [{
        	xtype: 'toolbar',
        	//xtype: 'titlebar',
  			title: 'Messes',
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
    			action: 'listBack',
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
    			action: 'detailUpdate'
    			
    		}
    		
    		]
  		},
        {
            xtype: 'violationList'
        }]
    }
});