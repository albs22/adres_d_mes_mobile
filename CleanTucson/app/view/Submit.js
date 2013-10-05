Ext.define('CleanTucson.view.Submit', {
	extend: 'Ext.form.Panel',
	xtype: 'violationSubmit',
	
	config: {
		
		items: [{
			xtype: 'textfield',
			name: 'decription',
			label: 'Description'
		},
		{
			xtype: 'textareafield',
			name: 'address',
			label: 'Address'
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
