Ext.define('CleanTucson.view.ViolationList', {
  extend: 'Ext.List',
  xtype: 'violationList',
  requires: ['CleanTucson.store.Violations'],

  config: {
    itemTpl: '{description}',
    store: 'Violations',
    onItemDisclosure: true
  }
});
