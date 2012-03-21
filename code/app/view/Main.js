Ext.define("senchaTalk.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar'],
    
    config: {
        tabBarPosition: 'bottom',
        
        items: [
            {
                title: 'Welcome',
                iconCls: 'home',
                
                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Hey World'
                },
                
                html: [
                    '<img src="http://staging.sencha.com/img/sencha.png" />',
					"<div align='center'>Whassap</p>"
                ].join("")
            }
        ]
    }
});