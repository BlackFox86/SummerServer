// priority: 0

//Adding Items
StartupEvents.registry('item', e => {
	e.create('steel_dust').texture('kubejs:item/steel_dust')
  })
	StartupEvents.registry("block", (event) => {event.create("steel_block")
	.displayName("Steel Block").material("metal").hardness(7.5).resistance(50.0).requiresTool(true)
    .tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool').textureAll("kubejs:block/steel_block")
})
//Removing Ores
WorldgenEvents.remove(event => {
	event.removeOres(props => {
		props.blocks = ['thermal:apatite_ore', 'thermal:niter_ore', 'thermal:cinnabar_ore','thermal:deepslate_apatite_ore', 'thermal:deepslate_niter_ore', 'thermal:deepslate_cinnabar_ore']
	})
})