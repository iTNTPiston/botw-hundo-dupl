// For now only en_US is supported, but it will be straightforward to add language options later
import display from "config/i18n/en_US.json";

export const getDisplayValue = (displayKey: string, defaultValue?: string) => {
	return Object.entries(display).find(([key]) => key === displayKey)?.[1] || defaultValue || displayKey;
};