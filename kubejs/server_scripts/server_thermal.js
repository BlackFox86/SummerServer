// priority: 0
ServerEvents.recipes(event => {
	//Gear recipes
	event.remove("thermal:satchel")


	//Removing old dust recipes
	event.remove("thermal:fire_charge/electrum_ingot_2")
	event.remove("thermal:electrum_dust_2")

	event.remove("thermal:fire_charge/constantan_ingot_2")
	event.remove("thermal:constantan_dust_2")

	event.remove("thermal:fire_charge/invar_ingot_3")
	event.remove("thermal:invar_dust_3")

	event.remove("thermal:fire_charge/signalum_ingot_4")
	event.remove("thermal:signalum_dust_4")

	event.remove("thermal:fire_charge/enderium_ingot_2")
	event.remove("thermal:enderium_dust_2")

	event.remove("thermal:fire_charge/lumium_ingot_4")
	event.remove("thermal:lumium_dust_4")

	event.remove({type:"crafting_shaped", output: "#forge:gears"})

	event.remove("thermal:machine_frame")
	event.remove("thermal:machine_furnace")
	event.remove("thermal:machine_pulverizer")
	event.remove("thermal:rf_coil")
	event.remove("thermal:redstone_servo")

	//Changing the machine frame recipes

	event.shaped(
		Item.of("thermal:invar_dust", 1),
		["AAB", "ABA", "BAA"], {
			A: "thermal:iron_dust", 
			B: "thermal:nickel_dust"
	}),
	event.shaped(
		Item.of("thermal:invar_gear", 1),
		["ABA", "BCB", "ABA"], {
			A: "thermal:invar_plate", 
			B: "thermal:invar_ingot",
			C: "magistuarmory:steel_ingot"
	}),
	event.shaped(
		Item.of("thermal:bronze_gear", 1),
		["ABA", "BCB", "ABA"], {
			A: "thermal:bronze_plate",
			B: "thermal:bronze_ingot",
			C: "magistuarmory:steel_ingot"
	}),
	event.shaped(
		Item.of("thermal:copper_gear", 1),
		["ABA", "BCB", "ABA"], {
			A: "thermal:copper_plate",
			B: "minecraft:copper_ingot",
			C: "magistuarmory:steel_ingot"
	}),
	event.shaped(
		Item.of("thermal:machine_frame", 1),
		["AAA", "CDC", "BBB"], {
			A: "thermal:iron_plate",
			B: "magistuarmory:steel_plate",
			C: "ae2:quartz_glass",
			D: "thermal:invar_gear"
	}),
	event.shaped(
		Item.of("thermal:rf_coil", 1),
		[" AB", "ACA", "BA "], {
			A: "minecraft:redstone_torch",
			B: "thermal:gold_plate",
			C: "minecraft:redstone"
	}),
	event.shaped(
		Item.of("thermal:machine_furnace", 1),
		["ABA", "CDC", "EBE"], {
			A: "thermal:bronze_gear",
			B: "thermal:rf_coil",
			C: "minecraft:blast_furnace",
			D: "thermal:machine_frame",
			E: "minecraft:stone_bricks"
	}),
	event.shaped(
		Item.of("thermal:machine_pulverizer", 1),
		["ABA", "CDC", "EFE"], {
			A: "thermal:copper_gear",
			B: "minecraft:piston",
			C: "minecraft:diamond",
			D: "thermal:machine_frame",
			E: "thermal:gold_plate",
			F: "thermal:rf_coil"
	}),
	event.shaped(
		Item.of("thermal:redstone_servo", 1),
		["ABA", " C ", "ABA"], {
			A: "minecraft:redstone_torch",
			B: "magistuarmory:steel_ingot",
			C: "thermal:iron_plate"
	})

	//Changing some plate recipes

	event.shapeless(Item.of("thermal:invar_plate", 1), ["3x thermal:invar_ingot"])
	event.shapeless(Item.of("thermal:iron_plate", 1), ["3x minecraft:iron_ingot"])
	event.shapeless(Item.of("thermal:gold_plate", 1), ["3x minecraft:gold_ingot"])
	event.shapeless(Item.of("thermal:copper_plate", 1), ["3x minecraft:copper_ingot"])
	event.shapeless(Item.of("thermal:bronze_plate", 1), ["3x thermal:bronze_ingot"])
	event.shapeless(Item.of("magistuarmory:steel_plate", 1), "3x magistuarmory:steel_ingot")
})