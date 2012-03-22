/**
 *  Main starting point of the application.
 *  @author Model Metrics
**/
/*global Ext */

Ext.define("senchaTalk.view.Main", {
	extend: 'Ext.tab.Panel',
	requires: ['Ext.TitleBar'],
	
	config: {
		tabBarPosition: 'bottom',
		
		items: [
			{
				title: 'Welcome',
				iconCls: 'home',
				xtype: 'Home'
			},{
				title: 'Comtact Me',
				iconCls: 'user',
				xtype: 'ContactMe'
			}
		]
	}
});