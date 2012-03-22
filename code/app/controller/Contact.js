/**
 *  Contact me controller
 *  @author Model Metrics
**/
/*global Ext */

Ext.define( 'senchaTalk.controller.Contact', {
	extend: 'Ext.app.Controller',
	
	config: {
		views: [ 'ContactMe' ]
	},
	
	init: function(){
		console.log( 'initialized ContactMe controller. This happens before the Application Launch is called' );
		
		this.control( {
			'panel': {
				render: function(){
					console.log( 'some panel was rendered' );
				}
			},
			'button[action=submit]': {
				click: this.submitClicked
			}
		});
	},
	
	/**
	 *  handler for when a submit was clicked
	**/
	submitClicked: function( button ){
		console.log( 'submit was clicked!' );
	}
});
