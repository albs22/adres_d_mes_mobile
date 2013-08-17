//CleanTucson.view.Main = Ext.extend(Ext.Panel, {
//	fullscreen: true,
//	layout: 'card',
//	
//	initComponent: function() {
//		var titleBarMain, butt1;
//		
//		titleBarMain = {
//							xtype: 'titlebar',
//							title: 'Clean Tucson',
//							docked: 'top'
//		};
//		
//		/*
//		Ext.apply(this, {
//			dockedItems:[titleBarMain]
//		});
//		*/
//		this.dockedItems = [titleBarMain];
//		
//		CleanTucson.view.Main.superclass.initComponent.call(this);
//	
//	}
//});










Ext.define('CleanTucson.view.Main', {
	extend: 'Ext.Panel',
	xtype: 'homePanel2',
	requires: ['Ext.TitleBar'],
	
	config: {
		
		items: [
			{
				title: 'Clean Tucson',
				docked: 'top',
				xtype: 'titlebar'
			},
			{
				xtype: 'panel',
				layout: {type: 'vbox', pack: 'center' },

				items:  [
				
							{
								xtype: 'button',
								text: 'Hello',
								cls: 'main-button',
								align: 'center',
								width: 150,
						

							},
							{
								xtype: 'spacer',
								height: 100,
								
							},
							{
								xtype: 'button',
								text: "World",
								cls: 'main-button',
								align: 'center',
								width: 150,
								
							}
							
					]
			}
				
				
				//html: ["Hello World"].join("")
			
			
			]
			
			/*
			items: 
				{
					title: 'Map',
					xtype: 'button'
				} */
		
			
			
		
	
		//title: 'Clean Tucson Home',
		//html: ['Hello World'].join("")	
		
	}	
	
})
