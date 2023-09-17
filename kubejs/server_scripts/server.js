// priority: 0


ServerEvents.recipes(event => {
	//Epic Knights
	event.remove({output:'magistuarmory:hilt'})
	event.remove({output:'magistuarmory:steel_chainmail'})
	event.remove({output:'magistuarmory:lamellar_rows'})
	event.remove({output:'magistuarmory:small_steel_plate'})
	event.remove({output:'magistuarmory:steel_plate'})
	event.remove({id:'magistuarmory:steel_ingot_blasting'})
	event.remove({id:'magistuarmory:furnace/steel_ingot_blasting'})
	event.remove({id:'magistuarmory:furnace/steel_nugget_blasting'})
	event.remove({id:'mysticalagriculture:essence/common/steel_ingot'})
	//Flameblades
	event.remove('magistuarmory:wood_flamebladedsword')
	event.remove('magistuarmory:stone_flamebladedsword')
	event.remove('magistuarmory:iron_flamebladedsword')
	event.remove('magistuarmory:gold_flamebladedsword')
	event.remove('magistuarmory:copper_flamebladedsword')
	event.remove('magistuarmory:bronze_flamebladedsword')
	event.remove('magistuarmory:silver_flamebladedsword')
	event.remove('magistuarmory:tin_flamebladedsword')
	event.remove('magistuarmory:steel_flamebladedsword')
	event.remove('magistuarmory:diamond_flamebladedsword')
	event.remove('magistuarmory:netherite_flamebladedsword')
	//Pipes Mod
	event.remove('pipez:item_pipe')
	event.remove('pipez:fluid_pipe')
	//Thermal
	event.remove('thermal:fire_charge/electrum_ingot_2')
	event.remove('thermal:electrum_dust_2')
	event.remove('thermal:fire_charge/constantan_ingot_2')
	event.remove('thermal:fire_charge/invar_ingot_3')
	event.remove('thermal:invar_dust_3')
	event.remove('thermal:earth_charge/diamond_dust_from_diamond')
	event.remove('thermal:constantan_dust_2')
	event.remove('thermal:fire_charge/signalum_ingot_4')
	event.remove('thermal:signalum_dust_4')
	event.remove('thermal:fire_charge/enderium_ingot_2')
	event.remove('thermal:enderium_dust_2')
	event.remove('thermal:fire_charge/lumium_ingot_4')
	event.remove('thermal:lumium_dust_4')
	//Mystical Agriculture
	event.remove('mysticalagriculture:machine_frame')
	
	event.shaped(
		Item.of('magistuarmory:hilt', 1),
		['ABA'],
		{
			A: 'magistuarmory:leather_strip', 
			B: 'quark:iron_rod'
		})
	event.shaped(
		Item.of('kubejs:steel_dust', 1),
		['ABA', 'BCB', 'ABA'],
		{
			A: 'mysticalagriculture:iron_essence', 
			B: 'minecraft:iron_ingot',
			C: 'mysticalagriculture:blaze_essence'
		})
	event.shaped(
		Item.of('magistuarmory:steel_flamebladedsword', 1),
		[' AB', ' BA', 'C  '],
		{
			A: 'mysticalagriculture:blaze_essence', 
			B: 'kubejs:steel_block',
			C: 'magistuarmory:hilt'
		})
	event.shaped(
		Item.of('magistuarmory:diamond_flamebladedsword', 1),
		[' AB', ' BA', 'C  '],
		{
			A: 'mysticalagriculture:blaze_essence', 
			B: 'minecraft:diamond_block',
			C: 'magistuarmory:steel_flamebladedsword'
		})
	event.shaped(
		Item.of('pipez:item_pipe', 16),
		['ABA', 'CDC', 'ABA'],
		{
			A: 'thermal:cured_rubber', 
			B: 'minecraft:iron_block',
			C: 'minecraft:dropper',
			D: 'minecraft:redstone_block'
		})
	event.shaped(
		Item.of('pipez:fluid_pipe', 16),
		['ABA', 'CDC', 'ABA'],
		{
			A: 'thermal:cured_rubber', 
			B: 'minecraft:iron_block',
			C: 'minecraft:bucket',
			D: 'thermal:fluid_cell'
		})
	
	event.blasting('magistuarmory:steel_ingot', 'kubejs:steel_dust').xp(0.7)
	
	event.shapeless(
		Item.of('magistuarmory:steel_ingot', 1), '9x mysticalagriculture:steel_essence')
	event.shapeless(
		Item.of('kubejs:steel_block', 1), '9x magistuarmory:steel_ingot')
	event.shapeless(
		Item.of('magistuarmory:steel_ingot', 9), ['kubejs:steel_block'])
})