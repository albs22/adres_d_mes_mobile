Ext.define('CleanTucson.view.ViolationList', {
  extend: 'Ext.List',
  xtype: 'vioList',
  alias: 'widget.vioList',
  autoCreate: true,

  config: {
  	
  	items: [{
  		
  					title: 'List',
    				xtype: 'toolbar',
    				dock: 'top'
  	},
  	{
  		xtype: 'list'
  	},
  	
  	
  	{
  	store: {
	    fields: ['name'],
	    data: [
	      { name: 'Candace' },
	      { name: 'Alex'}
	    ]
	 },
	 
	 itemTpl: '{name}'
  }]
  }

});
