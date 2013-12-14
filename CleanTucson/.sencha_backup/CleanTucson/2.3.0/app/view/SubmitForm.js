Ext.define('CleanTucson.view.SubmitForm', {
	extend: 'Ext.form.Panel',
	xtype: 'violationSubmit',
	
	config: {
		
		items: [{
			xtype: 'textfield',
			name: 'latitude',
			label: 'Latitude',
			id: 'latField'
		},
		{
			xtype: 'textfield',
			name: 'longitude',
			label: 'Longitude',
			id: 'lngField'
		},
		{
			xtype: 'textfield',
			name: 'address',
			label: 'Address'
		},
		{	
			xtype: 'textareafield',
			name: 'description',
			label: 'Description'
		},
		{
			xtype: 'selectfield',
			name: 'type',
			label: 'Type',
			options: [
				{
					text: 'Weeds',
					value: 'weeds'
				},
				{
					text: 'Mess',
					value: 'mess',
				},
				{
					text: 'Big Item',
					value: 'bigItem'
				}
			]
			
		}
		]
		
	}
	
	
});
