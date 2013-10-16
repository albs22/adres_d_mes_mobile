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
  			title: 'Violation List',
    		docked: 'top',
    		layout: {
    			pack: 'right'
    			//align: 'left'
    		},
    		items: [{
    			align: 'left',
    			iconCls: 'home',
    			iconMask: true,
    			action: 'toolBarHome',
    			
    		}, {
    			align: 'left',
    			iconCls: 'arrow_left',
    			iconsMask: true,
    			id: 'btnDetailBack',
    			hidden: true,
    			
    		},	
    		/*
    		
    			xtype: 'spacer'
    		}, {
    			xtype: 'spacer'
    		},
    		*/
    		
    		{
    			align: 'right',
    			text: 'Update',
    			itemId: 'btnDetailUpdate',
    			ui: 'confirm',
    			hidden: true,
    			
    			
    		
    		
    		}]
  		},
        {
            xtype: 'violationList'
        }]
    }
});