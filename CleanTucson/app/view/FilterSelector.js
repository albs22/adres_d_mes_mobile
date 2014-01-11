Ext.define('CleanTucson.view.FilterSelector', {
	extend: 'Ext.Picker',
	xtype: 'filterSelect',
	
	config: {
		items: [{
			xtype: 'picker',
			itemId: 'vioPicker',
			slots: [
				{
					name: 'violationFilter',
					title: 'Filter',
					
					data: [
						{text: 'Show All', 		value: 0},
						{text: 'Not Cleaned', 	value: 1},
						{text: 'Cleaned',		value: 2}
					]
				}
			],
			listeners: {
				pick: function(context, pickData) {
					console.log("pick" + pickData);
				},
				change: function() {
					console.log('change');					
				}
					/*
					element: el,
					fn: function(context, pickData) {
						console.log('change', pickData);
					}
					*/
				
			}
			
		}]
		
		
	}	
	
	
	
});
