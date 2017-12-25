G.AddData({
name: "Beyond Legacy",
author: "xcrafter_40",
desc: "Everything beyond legacy. Adds lots of functionality!",
engineVersion: 1,
manifest: 0,
func:function()
{
  new G.Tech({
		name:"plumbing",
		desc:"@Unlocks toilet makers<>Making toilets increases health. Who doesn't want one?",
		icon:[0,0],
		cost:{"insight":10},
		req:{"carving":true,"tool-making":true},
		effects:[],
	});
  /*
  new G.Unit({
		name:"gatherer",
		startWith:5,
		desc:"@forages for basic [food], [water] and [archaic building materials,Various interesting things]<>A vital part of an early tribe, [gatherer]s venture in the wilderness to gather food, wood, and other things of note.",
		icon:[0,0],
		cost:{},
		use:{"worker":1},
		//upkeep:{"food":0.2},
		//alternateUpkeep:{"food":"spoiled food"},
		effects:[
			{type:"gather",context:"gather",amount:2,max:4},//,multMax:{"leather pouches":1.1}//TODO
			//{type:"gather",context:"gather",what:{"water":1,"muddy water":1},amount:1,max:3,req:{"gathering focus":"water"}},
			{type:"gather",context:"gather",what:{"water":1,"muddy water":1},amount:1,max:3},
			{type:"gather",context:"gather",what:{"herb":0.5,"fruit":0.5},amount:1,max:1,req:{"plant lore":true}},
			{type:"addFree",what:{"worker":0.1},req:{"scavenging":true}},
			{type:"mult",value:1.2,req:{"harvest rituals":"on"}}
		],
		req:{"tribalism":true},
		category:"production",
		priority:10,
	});
  */
}
});
