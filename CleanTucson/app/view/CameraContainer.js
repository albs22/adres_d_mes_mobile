Ext.define('CleanTucson.view.CameraContainer', {
	extend: 'Ext.Panel',
	xtype: 'cameraContainer',
	requires: ['Ext.Img'],
	
	config: {
		items: [
			{
				xtype: 'button',
				text: 'Take Photo',
				itemId: 'btnTakePhoto',
				docked: 'bottom',
				margin: '0 20 20 10',
				iconMask: true,
				ui: 'confirm',
				action: 'capture'
			},
			{
				xtype    : 'button',
                itemId   : 'btnDelete',
                text: 'Clear Photo',
                iconCls  : 'delete',
                docked    : 'bottom',
                conMask : true,
                ui       : 'decline',
                action   : 'delete',
                hidden   : true
			},
			{
				xtype: 'container',
				layout: 'fit',
				margin: '10 0 0 0',
				itemId: 'imgContainer',
				items: [{
					xtype: 'image',
					itemId: 'img',
					height: 400
				}]
				
			}
		
		]
	}
	
});