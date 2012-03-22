/**
 *  Contact me form
 *  @author Model Metrics
**/
/*global Ext */

Ext.define( 'senchaTalk.view.contact.ContactMe', {
	extend: 'Ext.Panel',
	xtype: 'contact.ContactMe',
	id: 'ContactMeView',
	
	listners: {
		handleReset: function( e ){
			console.log( 'handleReset event captured' );
		}
	},
	
	config: {
		fullscreen: true,
		layout: 'vbox',
		title: 'Contact',
		
		items: [{
			xtype: 'fieldset',
			title: 'Contact',
			instructions: '(email is optional)',
			id: 'contactFS',
			
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
			handler: function( whichButton, e, listenerOptions ){
				var panel = this.up( '#ContactMeView' );
				var fieldset = panel.down( '#contactFS' );
				var values = fieldset.getValues();
				
				panel.fireEvent( 'handleReset', e );
				
				panel.handleReset( whichButton, e, listenerOptions );
				console.log( 'reset button was pushed' );
			}
		}]
	},
	
	/**
	 *  Handler if the reset button was pressed
	**/
	handleReset: function( whichButton, e, listenerOptions ){
		console.log( 'view is aware of the reset button being pushed' );
	}
});
