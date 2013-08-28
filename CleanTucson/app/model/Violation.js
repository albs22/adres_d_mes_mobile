Ext.define('Violation', {
	extend: 'Ext.data.model',
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