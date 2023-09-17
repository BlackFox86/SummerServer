// priority: 0
REIEvents.hide('item', event => {
	//Hiding Coins from REI

	event.hide('#forge:coins')
	event.hide('thermal:press_coin_die')
	event.hide('thermal:dynamo_numismatic')

	//Removing annoying ores from REI

	event.hide('#forge:ores/apatite')
	event.hide('#forge:ores/cinnabar')
	event.hide('#forge:ores/niter')
})
ItemEvents.tooltip(tooltip => {
	tooltip.add(["thermal:dynamo_stirling"], "\u00A76" + "Consumes solid fuel to create power.")
	tooltip.add(["thermal:dynamo_compression"], "\u00A76" + "Consumes various liquid fuels to create power.")
	tooltip.add(["thermal:dynamo_magmatic"], "\u00A76" + "Consumes lava to create power.")
	tooltip.add(["thermal:dynamo_lapidary"], "\u00A76" + "Consumes gems to create power.")
	tooltip.add(["thermal:dynamo_disenchantment"], "\u00A76" + "Disenchants items to create power.")
	tooltip.add(["thermal:dynamo_gourmand"], "\u00A76" + "Consumes food items to create power.")
})