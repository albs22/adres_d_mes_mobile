Ext.define('CleanTucson.controller.List', {
	extend: 'Ext.app.Controller',
	
	config: {
		refs: {	
      		listView: 'violist',
      		listPanel: 'listPanel',
      		btnBack: '#btnDetailBack'
		},
		
		control: {
      		'list' : {
       			 disclose: 'onListItemTap'
      		},
      		'#btnDetailBack': {
      			tap: 'onBtnBackTap'
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
    			align: 'left',
			datea: record.getData()
    			align: 'left',
    			align: 'left',
		});
		*/
		this.getBtnBack().setHidden(false);
		
		//lp = this.getListPanel();
		//lp.getBtn
		
    	this.getListPanel().push({
      		xtype: 'violationDetail',
      		title: 'Vio Detail',
      		data: record.getData()
   		});
   			
	},
	
	onBtnBackTap: function() {
		console.log('Back tap');
		this.getBtnBack().setHidden(true);
		this.getListPanel().pop();
	},
	
	
});
