Ext.define('CleanTucson.view.Submit', {
	extend: 'Ext.form.Panel',
	xtype: 'violationSubmit',
	
	config: {
		
		items: [{
			xtype: 'textfield',
			name: 'latitude',
			label: 'Latitude'
		},
		{
			xtype: 'textfield',
			name: 'longitude',
			label: 'Longitude'
		},
		{
			xtype: 'button',
			text: 'Select location on map',
			id: 'btnSelectLocation'
		},
		{
			xtype: 'textfield',
			name: 'address',
			label: 'Address'
		},
		{	
			xtype: 'textareafield',
			name: 'decription',
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
					text: 'Trash',
					value: 'trash',
				},
				{
					text: 'Big Item',
					value: 'bitItem'
				}
			]
			
		}
		]
		
	}
	
	
});
