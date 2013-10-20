Ext.define('CleanTucson.model.Violation', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{ name: 'date_entered',			type: 'date'   },
			{ name: 'description', 			type: 'string' },
			{ name: 'id', 					type: 'int'    },
			{ name: 'lat', 					type: 'float'  },
			{ name: 'long', 				type: 'float'  },
			{ name: 'status',				type: 'string' },
			{ name: 'violation_type', 				type: 'string' },
			{ name: 'violation_address', 	type: 'string' },
			{ name: 'image_before_url', 	type: 'string'}	
			//{ name: 'dateClosed',		type: 'date'   },
				
		]
	}
});