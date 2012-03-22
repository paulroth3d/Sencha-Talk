/**
 *  SenchaTalk Home screen
 *  @author Paul Roth
**/
/*global Ext */

Ext.define( 'senchaTalk.view.Home', {
	extend: 'Ext.Panel',
	xtype: 'Home',
	
	config: {
		fullscreen: true,
		scrollable: true,
		layout: 'vbox',
		
		items: [{
			xtype: 'image',
			src: 'http://staging.sencha.com/img/sencha.png',
			width: 210,
			height: 291
		},{
			xtype: 'panel',
			styleHtmlContent: true,
			html: [
				'<h1>Welcome to Sencha Touch</h1>',
				"<p>You're creating the Getting Started app. This demonstrates how ",
				"to use tabs, lists and forms to create a simple app</p>",
				'<h2>Sencha Touch (2.0.0)</h2>'
			].join("")
		}]
	}
});
