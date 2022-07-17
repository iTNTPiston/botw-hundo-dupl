import { DisplayableInventory, DisplayableSlot, itemStackToDisplayableSlot } from "./DisplayableInventory";
import { Slots } from "./Slots";
import { VisibleInventory } from "./VisibleInventory";

/*
 * Implementation of GameData in botw
 */
export class GameData implements DisplayableInventory {
    
	private slots: Slots = new Slots([]);
	constructor(slots: Slots){
		this.slots = slots;
	}

	public deepClone(): GameData {
		return new GameData(this.slots.deepClone());
	}
    
	public syncWith(pouch: VisibleInventory) {
		if(pouch.getCount() <=0){
			// inventory nuking.
			// when mCount <=0, gamedata is nuked when syncing with pouch
			this.slots = new Slots([]);
		}else{
			this.slots = pouch.getSlots().deepClone();
		}
	}

	public updateLife(life: number, slot: number){
		this.slots.updateLife(life, slot);
	}

	public addAllToPouchOnReload(pouch: VisibleInventory) {
		this.slots.getSlotsRef().forEach(stack=>pouch.addWhenReload(stack));
	}

	public getDisplayedSlots(isIconAnimated: boolean): DisplayableSlot[] {
		return this.slots.getSlotsRef().map(stack=>itemStackToDisplayableSlot(stack, false, isIconAnimated));
	}
}
