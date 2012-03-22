/**
 *  Contact me form
 *  @author Model Metrics
**/
/*global Ext */

Ext.define( 'senchaTalk.view.ContactMe', {
	extend: 'Ext.Panel',
	xtype: 'ContactMe',
	
	config: {
		fullscreen: true,
		layout: 'vbox',
		title: 'Contact',
		
		items: [{
			xtype: 'fieldset',
			title: 'Contact',
			instructions: '(email is optional)',
			
			items: [{
				xtype: 'textfield',
				label: 'Name'
			},{
				xtype: 'textfield',
				label: 'Email'
			},{
				xtype: 'textareafield',
				label: 'Message'
			}]
		},{
			xtype: 'button',
			text: 'Submit',
			action: 'submit'
		},{
			xtype: 'button',
			text: 'Reset',
			action: 'reset'
		}]
	}
});
