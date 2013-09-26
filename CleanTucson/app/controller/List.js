Ext.define('CleanTucson.controller.List', {
	extend: 'Ext.app.Controller',
	
	config: {
		refs: {	
      		listView: 'violist',
      		listPanel: 'listPanel'
		},
		
		control: {
      		'list' : {
       			 disclose: 'onListItemTap'
      		}
		}
	},
	
	onListItemTap: function(list, record) {
		console.log('List Item Tap');
		
		//Ext.Viewport.SetActiveItem('violationDetail');
		/*
		
		Ext.Viewport.add({
			xtype: 'violationDetail',
			title: 'Details',
			datea: record.getData()
		});
		*/
    	this.getListPanel().push({
      		xtype: 'violationDetail',
      		title: 'Vio Detail',
      		data: record.getData()
   		});
   		
   		
	}
});
