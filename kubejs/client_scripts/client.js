// priority: 0

// Visit the wiki for more info - https://kubejs.com/

REIEvents.hide("item", event => {
	//Epic Knights
	event.hide("magistuarmory:wood_flamebladedsword")
	event.hide("magistuarmory:stone_flamebladedsword")
	event.hide("magistuarmory:iron_flamebladedsword")
	event.hide("magistuarmory:gold_flamebladedsword")
	event.hide("magistuarmory:copper_flamebladedsword")
	event.hide("magistuarmory:bronze_flamebladedsword")
	event.hide("magistuarmory:silver_flamebladedsword")
	event.hide("magistuarmory:tin_flamebladedsword")
	event.hide("magistuarmory:steel_chainmail")
	event.hide("magistuarmory:lamellar_rows")
	event.hide("magistuarmory:small_steel_plate")
	//Mystical Agriculture
	event.hide("mysticalagriculture:machine_frame")
})
REIEvents.removeCategories(event => {
    event.yeet('minecraft:plugins/tags')
})