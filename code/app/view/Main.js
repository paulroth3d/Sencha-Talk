/**
 *  Main starting point of the application.
 *  @author Model Metrics
**/
/*global Ext */

Ext.define("senchaTalk.view.Main", {
	extend: 'Ext.tab.Panel',
	requires: ['Ext.TitleBar', 'Ext.carousel.Carousel', 'Ext.form.FieldSet'],
	
	config: {
		tabBarPosition: 'bottom',
		
		items: [{
			title: 'Welcome',
			iconCls: 'home',
			xtype: 'Home'
		},{
			title: 'Layout',
			iconCls: 'favorites',
			xtype: 'LayoutExample'
		},{
			title: 'Spiral Dock',
			iconCls: 'favorites',
			xtype: 'Docking'
		},{
			title: 'Template Demo',
			iconCls: 'info',
			xtype: 'TemplateDemo'
		},{
			title: 'Comtact Me',
			iconCls: 'user',
			xtype: 'ContactMe'
		}]
	}
});