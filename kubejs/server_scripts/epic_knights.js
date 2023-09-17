ServerEvents.recipes(event => {
	//Epic Knights
	event.remove({output:"magistuarmory:hilt"})
	event.remove({output:"magistuarmory:steel_chainmail"})
	event.remove({output:"magistuarmory:lamellar_rows"})
	event.remove({output:"magistuarmory:small_steel_plate"})
	event.remove({output:"magistuarmory:steel_plate"})
	event.remove({id:"magistuarmory:steel_ingot_blasting"})
	event.remove({id:"magistuarmory:furnace/steel_ingot_blasting"})
	event.remove({id:"magistuarmory:furnace/steel_nugget_blasting"})
	event.remove({id:"mysticalagriculture:essence/common/steel_ingot"})
	//Flameblades
	event.remove("magistuarmory:wood_flamebladedsword")
	event.remove("magistuarmory:stone_flamebladedsword")
	event.remove("magistuarmory:iron_flamebladedsword")
	event.remove("magistuarmory:gold_flamebladedsword")
	event.remove("magistuarmory:copper_flamebladedsword")
	event.remove("magistuarmory:bronze_flamebladedsword")
	event.remove("magistuarmory:silver_flamebladedsword")
	event.remove("magistuarmory:tin_flamebladedsword")
	event.remove("magistuarmory:steel_flamebladedsword")
	event.remove("magistuarmory:diamond_flamebladedsword")
	event.remove("magistuarmory:netherite_flamebladedsword")
	event.shaped(
		Item.of("magistuarmory:hilt", 1),
		["ABA"],
		{
			A: "magistuarmory:leather_strip", 
			B: "quark:iron_rod"
		})
	event.shaped(
		Item.of("kubejs:steel_dust", 1),
		["ABA", "BCB", "ABA"],
		{
			A: "mysticalagriculture:iron_essence", 
			B: "minecraft:iron_ingot",
			C: "mysticalagriculture:blaze_essence"
		})
	event.shaped(
		Item.of("magistuarmory:steel_flamebladedsword", 1),
		[" AB", " BA", "C  "],
		{
			A: "mysticalagriculture:blaze_essence", 
			B: "kubejs:steel_block",
			C: "magistuarmory:hilt"
		})
	event.shaped(
		Item.of("magistuarmory:diamond_flamebladedsword", 1),
		[" AB", " BA", "C  "],
		{
			A: "mysticalagriculture:blaze_essence", 
			B: "minecraft:diamond_block",
			C: "magistuarmory:steel_flamebladedsword"
	})
})