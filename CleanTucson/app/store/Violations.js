Ext.define('CleanTucson.store.Violations', {
	extend: 'Ext.data.Store',
	requires: ['CleanTucson.model.Violation'],

	config : {
		model: 'CleanTucson.model.Violation',
		autoLoad: true,
		storeId: 'Violations',
		
		proxy: { 
				type: 'ajax',
				pageParam: undefined,
				actionMethods: {
					create: 'POST',
					read: 'GET',
					update: 'PUT',
					destroy: 'DELETE',
				},
				//callbackKey: 'callback',
				url: 'http://0.0.0.0:3000/api/violations',
				//url: 'http://shielded-stream-2147.herokuapp.com/api/violations',				
				//api: {
				//	create: 'http://0.0.0.0:3000/api/violations',
				//	read: 'http://0.0.0.0:3000/api/violations'
				//},
				
				
				reader: {
					type: 'json',
					rootProperty: 'violations',
					totalProperty: 'violation'
				},
				
				writer: {
					type: 'json',
					rootProperty : 'violation'
					
				}
				
				
				
		}
		
		/*
		
		
		data: [
			{id: 1, lat: 32.1, lng: -111.1, description: 'Thats one big mess', status: 'open', type: 'Mess', address: '123 Fake St.', dateEntered: '09/13/2013'},
			{id: 2, lat: 32.13, lng: -111.13, description: 'The weeds are everywhere', status: 'closed', type: 'Weeds', address: '456 High St.', dateEntered: '10/12/2013'}
		
		]
		*/
		
	}
});