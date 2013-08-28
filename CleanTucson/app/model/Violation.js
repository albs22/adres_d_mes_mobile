Ext.define('CleanTucson.model.Violation', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{ name: 'id', 			type: 'int'    },
			{ name: 'lat', 			type: 'float'  },
			{ name: 'lng', 			type: 'float'  },
			{ name: 'description', 	type: 'string' },
			{ name: 'status',		type: 'string' },
			{ name: 'type', 		type: 'string' },
			{ name: 'address', 		type: 'string' }
		]
	}
});