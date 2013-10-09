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
				html: 'Map Here'
				/*items: [{
					xtype: 'map',
					id: 'submitMap'
				
					mapOptions: {
						zoom: 9,
    					center: new google.maps.LatLng(32.2500, -111.0071), 
    					mapTypeId: google.maps.MapTypeId.ROADMAP
					}	
				}] */
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
