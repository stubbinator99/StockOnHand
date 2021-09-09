export interface InvItem {
	name: string;
	upc?: number;
	storage_area?: string;
	min_amt?: number; // NOTE: Want this to be able to represent no minimum if the user desires, possibly -1, or use type 'any'
	max_amt?: number; // Same as above
}