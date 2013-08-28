Ext.define('CleanTucson.store.Violations', {
	extend: 'Ext.data.Store',
	requires: ['CleanTucson.model.Violation'],

	config : {
		model: 'CleanTucson.model.Violation',
		autoLoad: true,
		data: [
			{id: 1, lat: 32.1, lng: -111.1, description: 'Hello World', status: 'open', type: 'trash', address: '123 Fake St.' }
		]
	}
});