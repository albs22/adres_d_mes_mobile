Ext.define('CleanTucson.model.Violation', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{ name: 'date_submitted',			type: 'string'   },
			{ name: 'description', 			type: 'string' },
			{ name: 'id', 					type: 'int'    },
			{ name: 'lat', 					type: 'float'  },
			{ name: 'lng', 					type: 'float'  },
			{ name: 'status',				type: 'string' },
			{ name: 'violation_type', 		type: 'string' },
			{ name: 'violation_address', 	type: 'string' },
			//{ name: 'neighborhood',			type: 'string' },
			{ name: 'image_before',			type: 'string' },	
			{ name: 'image_after',			type: 'string' },					
			{ name: 'image_before_url_t', 	type: 'string' },
			{ name: 'image_before_url_f',	type:'string'  },
			{ name: 'image_after_url_t',	type: 'string' },
			{ name: 'image_after_url_f',	type: 'string' }
			//{ name: 'dateClosed',		type: 'date'   },
				
		]
	}
});