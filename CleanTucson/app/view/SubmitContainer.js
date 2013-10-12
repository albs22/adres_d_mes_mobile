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
			id: 'submitTabPanel',
			layout: {
				pack: 'center'
			},
			
		},
		items: [
			{
				xtype: 'toolbar',
	  			title: 'Submit a Mess',
	    		docked: 'top',
	    		id: 'submitToolbar',
	    		layout: {
    				pack: 'justify',
    				align: 'center' // align center is the default
				},
	    		items: [{
    				iconCls: 'home',
    				iconMask: true,
    				action: 'toolBarHome'
	    		}, {
	    			xtype: 'spacer'
	    		}, {
	    			ui: 'forward',
	    			text: 'Next',
	    			id: 'btnSubmitNext'
	    		}]
			},
			{
				title: 'Map',
				xtype: 'selectLocataionMap'
			},
			{
				title: 'Picture',
				id: 'submitPictureTab',
				html: 'Add a picture here'
			},
			{
				title: 'Info',
				xtype: 'violationSubmit',	
				id: 'vioForm',
				listeners: {
				  activate: function(){
                        //CleanTucson.app.getController('Create').onTabLoad(this);
                 }
			},
			}	
		]
	}
	
});
