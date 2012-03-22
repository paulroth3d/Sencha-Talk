/**
 *  Contact me controller
 *  @author Model Metrics
**/
/*global Ext, senchaTalk */

Ext.define( 'senchaTalk.controller.Contact', {
	extend: 'Ext.app.Controller',
	
	config: {
		refs: {
			contactMeView: '#ContactMeView',
			someCustomBtn: '#ContactMeView button[action=doSomethingCustom]'
		},
		
		control: {
			someCustomBtn: {
				tap: 'doSomethingCustom'
			},
			contactMeView: {
				initialize: function(){
					console.log( 'the contactMe panel has initialized, and this is known by the controller' );
				},
				
				/**
				 *  Event dispatched when the contact is ready to be submitted...
				**/
				contactSubmission: function( contactInfo ){
					console.log( 'Controller: Contact.contactSubmission----' );
					
					console.log( 'submitting contact:' );
					console.log( contactInfo );
					
					if( contactInfo && contactInfo.name ){
						senchaTalk.app.showNotification( 'Thanks ' + contactInfo.name + '! We\'ll get right on it!' );
					}
					
					if( this.getContactMeView ){
						var form = this.getContactMeView();
						
						form.fireEvent( 'resetView' );
					}
				}
			}
		}
	},
	
	init: function(){
		console.log( 'initialized ContactMe controller. This happens before the Application Launch is called' );
	},
	
	/**
	 *  Handler to call when doing something custom
	**/
	doSomethingCustom: function( button, event, listenerArgs ){
		console.log( 'controller received the do something custom event' );
	}
});
