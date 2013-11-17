Ext.define('CleanTucson.view.SubmitContainer', {
	//extend: 'Ext.navigation.View',
	extend: 'Ext.tab.Panel',
	xtype: 'submitContainer',
	requires: [
		'CleanTucson.view.SubmitForm',
		'CleanTucson.view.CameraContainer'
	],
	
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
			}
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
    				itemId: 'btnCreateHome',
    				action: 'toolBarCreateHome'
	    		}, {
	    			xtype: 'spacer'
	    		}, {
	    			ui: 'forward',
	    			text: 'Next',
	    			id: 'btnSubmitNext',
	    			action: 'createNext'
	    		}]
			},
			{
				title: 'Map',
				xtype: 'selectLocataionMap',
				listeners: {
				 	painted: function(){
                        CleanTucson.app.getController('Create').onTabLoad(this);
                 	}
				},
			},
			{
				title: 'Picture',
				xtype: 'cameraContainer',
				id: 'submitPictureTab',
				//html: 'Add a picture here',
				listeners: {
				 	painted: function(){
                        CleanTucson.app.getController('Create').onTabLoad(this);
                 	}
				},
				//items: [{
				//	xtype: 'mycamera'
				//}]
			},
			{
				title: 'Info',
				xtype: 'violationSubmit',	
				id: 'subitFormTab',
				listeners: {
				 	painted: function(){
                        CleanTucson.app.getController('Create').onTabLoad(this);
                 	}
				},
			}	
		]
	}
	
});
