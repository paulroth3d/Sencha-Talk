/**
 *  Layout Example
 *  @author Model Metrics
**/
/*global Ext */
Ext.define( 'senchaTalk.view.LayoutExample', {
	extend: 'Ext.Panel',
	xtype: 'LayoutExample',
	
	config: {
		fullscreen: true,
		layout: {
			type:'vbox',
			align: 'stretch'
		},
		
		/* defaults: { flex:1 }, */
		
		items: [{
			xtype:'carousel',
			direction: 'horizontal',
			flex: 1,
			items: [{
				html: 'Top A',
				style: 'background-color: #FF6666;'
			},{
				html: 'Top B',
				style: 'background-color: #BB6666;'
			},{
				html: 'Top C',
				style: 'background-color: #996666;'
			}]
		},{
			xtype:'carousel',
			direction: 'vertical',
			flex: 3,
			items: [{
				html: 'Middle A',
				style: 'background-color: #66FF66;'
			},{
				html: 'Middle B',
				style: 'background-color: #66BB66;'
			},{
				html: 'Middle C',
				style: 'background-color: #669966;'
			}]
		},{
			html: 'This is a bottom docked text',
			docked: 'bottom'
		}]
	}
});
