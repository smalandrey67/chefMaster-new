const getItemWithoutParse = <T>(key: string): T | undefined => {
	try {
		const serializedItem = localStorage.getItem(key);

		if (serializedItem === null) {
			return undefined;
		}

		return serializedItem as T;
	} catch (error) {
		console.error(`Error getting item from localStorage: ${error}`);
		return undefined;
	}
};

const getItem = <T>(key: string): T | undefined => {
	try {
		const serializedItem = localStorage.getItem(key);

		if (serializedItem === null) {
			return undefined;
		}

		return JSON.parse(serializedItem) as T;
	} catch (error) {
		console.error(`Error getting item from localStorage: ${error}`);
		return undefined;
	}
};

const setItem = <T>(key: string, item: T): void => {
	try {
		const serializedItem = typeof item === "string" ? item : JSON.stringify(item);
		localStorage.setItem(key, serializedItem);
	} catch (error) {
		console.error(`Error setting item in localStorage: ${error}`);
	}
};

const removeItem = (key: string): void => {
	try {
		localStorage.removeItem(key);
	} catch (error) {
		console.error(`Error removing item from localStorage: ${error}`);
	}
};

export const lcs = { getItemWithoutParse, getItem, setItem, removeItem };
