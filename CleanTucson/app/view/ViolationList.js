Ext.define('CleanTucson.view.ViolationList', {
  extend: 'Ext.List',
  xtype: 'vioList',
  alias: 'widget.vioList',
  autoCreate: true,

  config: {
  	
  	items: [{
  					xtype: 'toolbar',
  					title: 'Violation List',
    				dock: 'top',
    				items: [{
    					align: 'left',
    					iconCls: 'home',
    					iconMask: true,
    					action: 'toolBarHome'
    				}]
  	},
  	{
  		xtype: 'list',
  		store: {
	    fields: ['name'],
	    id: 'vioList2',
	    data: [
	      { name: 'Candace' },
	      { name: 'Alex'}
	    ]},
	 	itemTpl: '{name}'
	 	
  }]
  }

});
