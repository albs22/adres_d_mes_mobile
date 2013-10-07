Ext.define('CleanTucson.view.SubmitContainer', {
	//extend: 'Ext.navigation.View',
	extend: 'Ext.tab.Panel',
	xtype: 'submitContainer',
	requires: ['CleanTucson.view.Submit'],
	
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
	  			title: 'Violation List',
	    		docked: 'top',
			},
			{
				title: 'Map',
				html: 'Map Here',
			},
			{
				title: 'Picture',
				html: 'Add a picture here'
			},
			{
				title: 'Info',
				xtype: 'violationSubmit'		
			}	
		]
	}
	
});
