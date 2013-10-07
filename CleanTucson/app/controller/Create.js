Ext.define('CleanTucson.controller.Create', {
	extend: 'Ext.app.Controller',
	
	
	
	config: {
		
		control: {
			'#btnSelectLocation': {
				tap: 'onSelectLocation'
			}
		}	
	},
	
	onSelectLocation: function() {
		console.log("Tap select location");
		Ext.Viewport.setActiveItem('selectLocataionMap');
		
	}
	
	
	
});
