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
	padding: 6,
	
	listeners: {
		resetView: function( e ){
			console.log( 'handleReset event captured' );
			this.resetForm();
		},
		
		initialize: function(){
			console.log( 'ContactMe form has initialized itself' );
			
			//-- initialize all the events that can be fired/listened for on this object
			this.enableBubble([ 'contactSubmission', 'resetView' ]);
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
				//panel.handleSubmit( whichButton,e,listenerOptions );
				
				var contactForm = panel.down( '#contactF' );
				var values= contactForm.getValues();
				
				panel.fireEvent( 'contactSubmission', values );
			}
		},{
			xtype: 'button',
			text: 'Reset',
			handler: function( whichButton, e, listenerOptions ){
				var panel = this.up( '#ContactMeView' );
				
				//-- it doesn't seem necessary to tell outside listeners that the form should be reset.
				panel.resetForm();
			}
		},{
			xtype: 'button',
			text: 'Sample Button',
			action: 'doSomethingCustom'
		}]
	},
	
	/**
	 *  Handler if the reset button was pressed
	**/
	resetForm: function(){
		var contactForm = this.down( '#contactF' );
		if( contactForm ){
			contactForm.reset();
		}
	}
});
