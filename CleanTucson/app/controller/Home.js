Ext.define('CleanTucson.controller.Home', {
	extend: 'Ext.app.Controller',
	
	views: ['Main'],
	
	'init': function() {
		console.log('Home Controller');
	}
	
	/*
	'index' : function (options) {
		if (!CleanTucson.view.Main) {
			CleanTucson.view.Main = new CleanTucson.view.Main();
		}
	}
	*/
	
});