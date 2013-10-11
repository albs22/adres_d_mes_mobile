Ext.define('CleanTucson.view.SubmitContainer', {
	//extend: 'Ext.navigation.View',
	extend: 'Ext.tab.Panel',
	xtype: 'submitContainer',
	requires: ['CleanTucson.view.SubmitForm'],
	
	config: {
		//navigationBar: false,
		//fullscreen: true,
		//title: 'Submit Tabs',
		//styleHtmlContent: true,
		
		tabBar: {
			docked: 'top',
			layout: {
				pack: 'center'
			}
		},
		items: [
			{
				xtype: 'toolbar',
	  			title: 'Submit a Mess',
	    		docked: 'top',
	    		items: [{
	    			align: 'left',
    				iconCls: 'home',
    				iconMask: true,
    				action: 'toolBarHome'
	    		}]
			},
			{
				title: 'Map',
				xtype: 'selectLocataionMap'
			},
			{
				title: 'Picture',
				html: 'Add a picture here'
			},
			{
				title: 'Info',
				xtype: 'violationSubmit',	
				id: 'vioForm'	
			}	
		]
	}
	
});
