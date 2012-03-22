/**
 *  Golden Spiral made out of docking items
 *  @author Model Metrics
**/
/*global Ext */

Ext.define( 'senchaTalk.view.Docking', {
	extend: 'Ext.Panel',
	xtype: 'Docking',
	padding: 10,
	
	config: {
		fullscreen: true,
		
		items: [{
			cls: 'panel1',
			width: 340,
			height: 210,
			html: 'P1',
			
			items: [{
				docked: 'right',
				width: 130,
				height: 210,
				cls: 'panel2',
				html: 'P2',
				
				items: [{
					docked: 'top',
					width: 130,
					height: 80,
					cls: 'panel3',
					html: 'P3',
					
					items: [{
						docked: 'left',
						width: 50,
						height: 80,
						cls: 'panel4',
						
						items: [{
							docked: 'bottom',
							width: 50,
							height: 30,
							cls: 'panel5',
							
							items: [{
								docked: 'right',
								width: 20,
								height: 30,
								cls: 'panel6'
							}]
						}]
					}]
				}]
			}]
		},{
			docked: 'bottom',
			html: [
				'<ul><li>P1 - docked left</li>',
				'<li>P2 - docked right</li>',
				'<li>P3 - docked top</li>',
				'<li>P4 - docked left</li></ul>' ].join("")
		}]
	}
});
