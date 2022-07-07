import Images from "assets/img";

import itemList from "config/items.json";

export enum ItemType {
    Weapon = 0,
    Bow = 1,
    Arrow = 2,
    Shield = 3,
    Armor = 4,
    Material = 5,
    Food = 6,
    Key = 7
}

export const ItemTypes = [
	ItemType.Weapon,
	ItemType.Bow,
	ItemType.Arrow,
	ItemType.Shield,
	ItemType.Armor,
	ItemType.Material,
	ItemType.Food,
	ItemType.Key
];

export type ItemStack = {
    item: Item,
    count: number,
    equipped: boolean
}

export enum Item {
    // Weapons
    MasterSword = "MasterSword",
    SpringLoadedHammer = "SpringLoadedHammer",
    SavageLynelSword = "SavageLynelSword",
    WoodcuttersAxe = "WoodcuttersAxe",
    SavageLynelCrusher = "SavageLynelCrusher",
    Weapon = "Weapon",

    // Bows
    BowOfLight = "BowOfLight",
    ForestDwellersBow = "ForestDwellersBow",
    SavageLynelBow = "SavageLynelBow",
    Bow = "Bow",

    // Arrows
    NormalArrow = "NormalArrow",
    FireArrow = "FireArrow",
    IceArrow = "IceArrow",
    ShockArrow = "ShockArrow",
    BombArrow = "BombArrow",
    AncientArrow = "AncientArrow",

    // Shields
    HylianShield = "HylianShield",
    PotLid = "PotLid",
    AncientShield = "AncientShield",
    Shield = "Shield",

    // Armor
    OldShirt = "OldShirt",
    ZoraArmor = "ZoraArmor",
    Armor = "Armor",

		// Materials
    HeartyDurian = "HeartyDurian",
    PalmFruit = "PalmFruit",
    Apple = "Apple",
    Wildberry = "Wildberry",
    Hydromelon = "Hydromelon",
    SpicyPepper = "SpicyPepper",
    Voltfruit = "Voltfruit",
    Lotus = "Lotus",
    MightyBananas = "MightyBananas",
    BigHeartyTruffle = "BigHeartyTruffle",
    HeartyTruffle = "HeartyTruffle",
    EnduraShroom = "EnduraShroom",
    HylianShroom = "HylianShroom",
    StamellaShroom = "StamellaShroom",
    Chillshroom = "Chillshroom",
    Sunshroom = "Sunshroom",
    Zapshroom = "Zapshroom",
    Rushroom = "Rushroom",
    Razorshroom = "Razorshroom",
    Ironshroom = "Ironshroom",
    SilentShroom = "SilentShroom",
    BigHeartyRadish = "BigHeartyRadish",
    HeartyRadish = "HeartyRadish",
    EnduraCarrot = "EnduraCarrot",
    HyruleHerb = "HyruleHerb",
    SwiftCarrot = "SwiftCarrot",
    FortifiedPumpkin = "FortifiedPumpkin",
    CoolSafflina = "CoolSafflina",
    WarmSafflina = "WarmSafflina",
    ElectricSafflina = "ElectricSafflina",
    SwiftViolet = "SwiftViolet",
    MightyThistle = "MightyThistle",
    Armoranth = "Armoranth",
    BlueNightshade = "BlueNightshade",
    SilentPrincess = "SilentPrincess",
    RawGourmetMeat = "RawGourmetMeat",
    RawWholeBird = "RawWholeBird",
    RawPrimeMeat = "RawPrimeMeat",
    RawBirdThigh = "RawBirdThigh",
    RawMeat = "RawMeat",
    RawBirdDrumstick = "RawBirdDrumstick",
    Honey = "Honey",
    HylianRice = "HylianRice",
    BirdEgg = "BirdEgg",
    TabanthaWheat = "TabanthaWheat",
    FreshMilk = "FreshMilk",
    Acorn = "Acorn",
    ChickalooTreeNut = "ChickalooTreeNut",
    CaneSugar = "CaneSugar",
    GoatButter = "GoatButter",
    GoronSpice = "GoronSpice",
    RockSalt = "RockSalt",
    MonsterExtract = "MonsterExtract",
    StarFragment = "StarFragment",
    DinraalsScale = "DinraalsScale",
    DinraalsClaw = "DinraalsClaw",
    ShardOfDinraalsFang = "ShardOfDinraalsFang",
    ShardOfDinraalsHorn = "ShardOfDinraalsHorn",
    NaydrasScale = "NaydrasScale",
    NaydrasClaw = "NaydrasClaw",
    ShardOfNaydrasFang = "ShardOfNaydrasFang",
    ShardOfNaydrasHorn = "ShardOfNaydrasHorn",
    FaroshScale = "FaroshScale",
    FaroshClaw = "FaroshClaw",
    ShardOfFaroshsFang = "ShardOfFaroshsFang",
    FaroshHorn = "FaroshHorn",
    HeartySalmon = "HeartySalmon",
    HeartyBlueshellSnail = "HeartyBlueshellSnail",
    HeartyBass = "HeartyBass",
    HyruleBass = "HyruleBass",
    StaminokaBass = "StaminokaBass",
    ChillfinTrout = "ChillfinTrout",
    SizzlefinTrout = "SizzlefinTrout",
    VoltfinTrout = "VoltfinTrout",
    StealthfinTrout = "StealthfinTrout",
    MightyCarp = "MightyCarp",
    ArmoredCarp = "ArmoredCarp",
    SankeCarp = "SankeCarp",
    MightyPorgy = "MightyPorgy",
    ArmoredPorgy = "ArmoredPorgy",
    SneakyRiverSnail = "SneakyRiverSnail",
    RazorclawCrab = "RazorclawCrab",
    IronshellCrab = "IronshellCrab",
    BrightEyedCrab = "BrightEyedCrab",
    Fairy = "Fairy",
    WinterwingButterfly = "WinterwingButterfly",
    SummerwingButterfly = "SummerwingButterfly",
    ThunderwingButterfly = "ThunderwingButterfly",
    SmotherwingButterfly = "SmotherwingButterfly",
    ColdDarner = "ColdDarner",
    WarmDarner = "WarmDarner",
    ElectricDarner = "ElectricDarner",
    RestlessCricket = "RestlessCricket",
    BladedRhinoBeetle = "BladedRhinoBeetle",
    RuggedRhinoBeetle = "RuggedRhinoBeetle",
    Beetle = "Beetle",
    SunsetFirefly = "SunsetFirefly",
    HotFootedFrog = "HotFootedFrog",
    TirelessFrog = "TirelessFrog",
    HightailLizard = "HightailLizard",
    HeartyLizard = "HeartyLizard",
    FireproofLizard = "FireproofLizard",
    Flint = "Flint",
    Amber = "Amber",
    Opal = "Opal",
    LuminousStone = "LuminousStone",
    Topaz = "Topaz",
    Ruby = "Ruby",
    Sapphire = "Sapphire",
    Diamond = "Diamond",
    BokoblinHorn = "BokoblinHorn",
    BokoblinFang = "BokoblinFang",
    BokoblinGuts = "BokoblinGuts",
    MoblinHorn = "MoblinHorn",
    MoblinFang = "MoblinFang",
    MoblinGuts = "MoblinGuts",
    LizalfosHorn = "LizalfosHorn",
    LizalfosTalon = "LizalfosTalon",
    Tail = "Tail",
    IcyLizalfosTail = "IcyLizalfosTail",
    RedLizalfosTail = "RedLizalfosTail",
    YellowLizalfosTail = "YellowLizalfosTail",
    LynelHorn = "LynelHorn",
    LynelHoof = "LynelHoof",
    LynelGuts = "LynelGuts",
    ChuchuJelly = "ChuchuJelly",
    WhiteChuchuJelly = "WhiteChuchuJelly",
    RedChuchuJelly = "RedChuchuJelly",
    YellowChuchuJelly = "YellowChuchuJelly",
    KeeseWing = "KeeseWing",
    IceKeeseWing = "IceKeeseWing",
    FireKeeseWing = "FireKeeseWing",
    ElectricKeeseWing = "ElectricKeeseWing",
    KeeseEyeball = "KeeseEyeball",
    OctorokTentacle = "OctorokTentacle",
    OctorokEyeball = "OctorokEyeball",
    OctoBalloon = "OctoBalloon",
    MoldugaFin = "MoldugaFin",
    MoldugaGuts = "MoldugaGuts",
    HinoxToenail = "HinoxToenail",
    HinoxTooth = "HinoxTooth",
    HinoxGuts = "HinoxGuts",
    Screw = "Screw",
    Spring = "Spring",
    AncientGear = "AncientGear",
    Shaft = "Shaft",
    Core = "Core",
    GiantAncientCore = "GiantAncientCore",
    Wood = "Wood",

    // Food
    SpeedFood = "SpeedFood",
    EnduraFood = "EnduraFood",

    // Key Items
    Slate = "Slate",
    MiphasGrace = "MiphasGrace",
    MiphasGracePlus = "MiphasGracePlus",
    RevalisGale = "RevalisGale",
    RevalisGalePlus = "RevalisGalePlus",
    DaruksProtection = "DaruksProtection",
    DaruksProtectionPlus = "DaruksProtectionPlus",
    UrbosasFury = "UrbosasFury",
    UrbosasFuryPlus = "UrbosasFuryPlus",
    Glider = "Glider",
    KorokSeed = "KorokSeed",
    HestusGift = "HestusGift",
    SpiritOrb = "SpiritOrb",
    MedohsEmblem = "MedohsEmblem",
    NaborissEmblem = "NaborissEmblem",
    RudaniasEmblem = "RudaniasEmblem",
    RutasEmblem = "RutasEmblem",
    HestusMaracas = "HestusMaracas",
    ThunderHelmKeyItem = "ThunderHelmKeyItem",
    ClassifiedEnvelope = "ClassifiedEnvelope",
    MedalOfHonorTalus = "MedalOfHonorTalus",
    MedalOfHonorHinox = "MedalOfHonorHinox",
    MedalOfHonorMolduga = "MedalOfHonorMolduga",
    PictureOfTheChampions = "PictureOfTheChampions",
    KnightsBridle = "KnightsBridle",
    RoyalBridle = "RoyalBridle",
    ExtravagantBridle = "ExtravagantBridle",
    MonsterBridle = "MonsterBridle",
    TravelersBridle = "TravelersBridle",
    AncientBridle = "AncientBridle",
    KnightsSaddle = "KnightsSaddle",
    RoyalSaddle = "RoyalSaddle",
    ExtravagantSaddle = "ExtravagantSaddle",
    MonsterSaddle = "MonsterSaddle",
    TravelersSaddle = "TravelersSaddle",
    AncientSaddle = "AncientSaddle",
    TravelMedallion = "TravelMedallion"
}

type ItemData = {
	item: Item,
	image: string,
	type: ItemType,
	repeatable: boolean,
	stackable: boolean,
  animated: boolean
	animatedImage?: string,
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
	[ItemType.Food]: 0,
};
const register = (item: Item, type: ItemType, options?: Partial<ItemData>) => {
	const sortOrder = TypeToCount[type];
	TypeToCount[type]++;
	const data: ItemData = {
		item,
		type,
		repeatable: true,
		stackable: true,
		animated: false,
		sortOrder,
		...options||{},
		// If defined, the "image" on the options object is actually an image key. Thus, we must resolve it after
		// options are applied to override it with the correct value (falling back on item name if undefined)
		animatedImage: options?.animated ? Images[`${options?.image ?? item}Animated`] : undefined,
		image: Images[`${options?.image ?? item}`],
	};
	ItemToData[item] = data;
};

itemList.items.forEach(itemData => {
	register(itemData.item as Item, (<never>ItemType)[itemData.type], itemData.options);
});

export const itemToItemData = (item: Item): ItemData => ItemToData[item] as ItemData;
export const itemToArrowType = (item: Item): string => {
	if(itemToItemData(item).type === ItemType.Arrow){
		const str = `${item}`;
		return str.substring(0,str.length-5);
	}
	return "";
};

export const getAllItems = (): string[] => Object.keys(ItemToData);
