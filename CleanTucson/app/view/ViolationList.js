Ext.define('CleanTucson.view.ViolationList', {
  extend: 'Ext.List',
  xtype: 'violationList',
  requires: ['CleanTucson.store.Violations'],

  config: {
    itemTpl: "<table>" +
    			"<tr>" +
    				"<td>" +
    					"<img width='50px' src='{image_before_url_t}' />" +
    				"</td>" +
    				"<td class='list-text'>" +
    					"{description}" +
    				"</td>" +
    			"</tr>" +
    		"</table>",
    
    store: 'Violations',
    onItemDisclosure: true
  }
});
