import { DisplayableSlot } from "core/DisplayableInventory";
import { ItemSlot } from "./ItemSlot";

export type ItemListProps = {
    slots: DisplayableSlot[],
    isAnimated: boolean
}

export const ItemList: React.FC<ItemListProps> = ({slots, isAnimated}) => {
	return <>
		{
			slots.map((slot, i)=>{
				return <ItemSlot key={i} slot={slot} isAnimated={isAnimated}/>;
			})
		}
	</>;
};
