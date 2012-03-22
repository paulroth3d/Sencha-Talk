/**
 *  Contact me form
 *  @author Model Metrics
**/
/*global Ext */

Ext.define( 'senchaTalk.view.ContactMe', {
	extend: 'Ext.Panel',
	xtype: 'ContactMe',
	id: 'ContactMeView',
	requires: ['Ext.form.Panel'],
	
	listners: {
		handleReset: function( e ){
			console.log( 'handleReset event captured' );
		},
		
		initialize: function(){
			console.log( 'ContactMe form has initialized' );
		}
	},
	
	config: {
		fullscreen: true,
		layout: 'vbox',
		title: 'Contact',
		
		items: [{
			xtype: 'formpanel',
			flex: 1,
			id: 'contactF',
			
			items: [{
				xtype: 'fieldset',
				title: 'Contact',
				instructions: '(email is optional)',
				
				items: [{
					xtype: 'textfield',
					label: 'Name',
					name: 'name'
				},{
					xtype: 'textfield',
					label: 'Email',
					name: 'email'
				},{
					xtype: 'textareafield',
					label: 'Message',
					name: 'message'
				}]
			}]
		},{
			xtype: 'button',
			text: 'Submit',
			handler: function( whichButton, e, listenerOptions ){
				var panel = this.up( '#ContactMeView' );
				panel.handleSubmit( whichButton,e,listenerOptions );
			}
		},{
			xtype: 'button',
			text: 'Reset',
			handler: function( whichButton, e, listenerOptions ){
				var panel = this.up( '#ContactMeView' );
				panel.handleReset( whichButton, e, listenerOptions );
			}
		}]
	},
	
	/**
	 *  Handler for submission
	 **/
	handleSubmit: function( whichButton, e, listenerOptions ){
		var contactForm = this.down( '#contactF' );
		var values= contactForm.getValues();
		
		console.log( 'you have submitted the following values:' );
		console.log( values );
	},
	
	/**
	 *  Handler if the reset button was pressed
	**/
	handleReset: function( whichButton, e, listenerOptions ){
		var contactForm = this.down( '#contactF' );
		contactForm.reset();
		console.log( 'view is aware of the reset button being pushed' );
	}
});
