Ext.define('CleanTucson.controller.List', {
	extend: 'Ext.app.Controller',
	
	config: {
		refs: {	
			//violationList: '#vioList2'
			vList: { selector: 'vioList #vioList8' }
		},
		
		control: {
			vList: {
				itemtap: 'onListItemTap'
			}
		}
		
	
	
	},
	
	onListItemTap: function(dataView, index, target, record, e, options) {
		console.log('List Item Tap');
	}
	
	
	
	
});