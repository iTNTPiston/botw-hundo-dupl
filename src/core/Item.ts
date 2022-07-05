import Images from "assets/img";

import itemList from "config/items.json";

export enum ItemType {
    Weapon = 0,
    Bow = 1,
	Arrow = 2,
    Shield = 3,
	Armor = 4,
    Material = 5,
    Meal = 6,
    Key = 7
}

export const ItemTypes = [
	ItemType.Weapon,
	ItemType.Bow,
	ItemType.Arrow,
	ItemType.Shield,
	ItemType.Armor,
	ItemType.Material,
	ItemType.Meal,
	ItemType.Key
];

export type ItemStack = {
    item: Item,
    count: number,
    equipped: boolean
}

export enum Item {
    Slate = "Slate",
    Glider = "Glider",
    SpiritOrb = "SpiritOrb",
    
    Lotus = "Lotus",
    SilentPrincess = "SilentPrincess",
    Honey = "Honey",
    Acorn = "Acorn",
    FaroshScale = "FaroshScale",
    FaroshClaw = "FaroshClaw",
    FaroshHorn = "FaroshHorn",
    HeartyBass = "HeartyBass",
    Beetle = "Beetle",
    Opal = "Opal",
    Diamond = "Diamond",
    Tail = "Tail",
    Spring = "Spring",
    Shaft = "Shaft",
    Core = "Core",
    Wood = "Wood",

	Rushroom = "Rushroom",
	Screw = "Screw",
	HyruleBass = "HyruleBass",
	LizalfosHorn = "LizalfosHorn",
	LizalfosTalon = "LizalfosTalon",

    SpeedFood = "SpeedFood",
	EnduraFood = "EnduraFood",
	Weapon = "Weapon",
	Bow = "Bow",
	NormalArrow = "NormalArrow",
	FireArrow = "FireArrow",
	IceArrow = "IceArrow",
	ShockArrow = "ShockArrow",
	BombArrow = "BombArrow",
	AncientArrow = "AncientArrow",
	Shield = "Shield",

	Apple = "Apple",
	HylianShroom = "HylianShroom",
	SpicyPepper = "SpicyPepper",
	EnduraShroom = "EnduraShroom",
	HeartyRadish = "HeartyRadish",
	BigHeartyRadish = "BigHeartyRadish",
	Fairy = "Fairy",

	MasterSword = "MasterSword",
	ZoraArmor = "ZoraArmor",
}

type ItemData = {
	item: Item,
	image: string,
	type: ItemType,
	repeatable: boolean,
	stackable: boolean,
	sortOrder: number,
}

const ItemToData: {[k in Item]?: ItemData} = {};
const TypeToCount = {
	[ItemType.Weapon]: 0,
	[ItemType.Bow]: 0,
	[ItemType.Arrow]: 0,
	[ItemType.Shield]: 0,
	[ItemType.Armor]: 0,
	[ItemType.Material]: 0,
	[ItemType.Key]: 0,
	[ItemType.Meal]: 0,
};
const register = (_id: number, item: Item, type: ItemType, options?: Partial<ItemData>) => {
	const sortOrder = TypeToCount[type];
	TypeToCount[type]++;
	const data: ItemData = {
		item,
		type,
		repeatable: true,
		stackable: true,
		sortOrder,
		...options||{},
		// If defined, the "image" on the options object is actually an image key. Thus, we must resolve it after
		// options are applied to override it with the correct value (falling back on item name if undefined)
		image: Images[`${options?.image || item}`],
	};
	// if(id in IdToData){
	// 	console.error("Multiple items registered to the same id: "+id+", ("+item+")");
	// }
	//IdToData[id] = data;
	ItemToData[item] = data;
};
const getItemTypeValueByName = (type: string) => {
	return Object.entries(ItemType).find(([key]) => key === type)?.[1];
};

itemList.items.forEach(itemData => {
	// Default id to 0 if undefined in config file
	const id = itemData.id ? Number(itemData.id) : 0;
	register(id, itemData.item as Item, getItemTypeValueByName(itemData.type) as ItemType, itemData.options);
});

//export const idToItemData = (id: number): ItemData => IdToData[id];
export const itemToItemData = (item: Item): ItemData => ItemToData[item] as ItemData;
export const itemToArrowType = (item: Item): string => {
	if(itemToItemData(item).type === ItemType.Arrow){
		const str = `${item}`;
		return str.substring(0,str.length-5);
	}
	return "";
};

export const getAllItems = (): string[] => Object.keys(ItemToData);
