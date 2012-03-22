/**
 *  Template that demonstrates xtemplates
 *  @author Model Metrics
**/
/*global Ext */

var records = [{
	name: 'The king<br />of Limbs',
	starRating: 3.5,
	cost: '$7.99',
	thumb: 'http://www.darkbluestudios.com/transfer/proth/radiohead/kingOfLimbs.jpg',
	target: 'http://www.amazon.com/The-King-Limbs-Radiohead/dp/B004NSULHM/ref=sr_1_1?ie=UTF8&qid=1332404300&sr=8-1'
},{
	name: 'OK Computer',
	starRating: 4.5,
	cost: '$10.00',
	thumb: 'http://www.darkbluestudios.com/transfer/proth/radiohead/okComputer.jpg',
	target: 'http://www.amazon.com/OK-Computer-Radiohead/dp/B000002UJQ/ref=sr_1_3?ie=UTF8&qid=1332404300&sr=8-3'
},{
	name: 'Kid A',
	starRating: 4.5,
	cost: '$10.09',
	thumb: 'http://www.darkbluestudios.com/transfer/proth/radiohead/kidA.jpg',
	target: 'http://www.amazon.com/Kid-A-Radiohead/dp/B00004XONN/ref=sr_1_5?ie=UTF8&qid=1332404300&sr=8-5'
}];

var customXTemplate = new Ext.XTemplate( 
	'<tpl for=".">',
	"<div class='record'>",
		"<h2>{name}</h2>",
		"<p class='rating'>rating: {starRating}</p>",
		"<p class='cost'>cost: {cost}</p>",
		//"<p class='thumb'><a onclick='{this.doAlert(target)}'><img src='{thumb}' /></a></p>",
		"<p class='thumb'><img src='{thumb}' /></p>",
	"</div>",
	'</tpl>',
	{
		doAlert: function( msg ){
			alert( msg );
		}
	}
);

Ext.define( 'senchaTalk.view.TemplateDemo', {
	extend: 'Ext.Panel',
	xtype: 'TemplateDemo',
	
	config: {
		fullscreen: true,
		scrollable: true,
		
		/* templates can be displayed inline or separately through an activate */
		tpl: customXTemplate,
		
		data: records
	}
});
