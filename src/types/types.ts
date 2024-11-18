export enum MediaType {
	Nothing,
	Video,
	Image,
	Error
}

export interface DisplayMediaInterface {
	decodedValue: string;
	mediaType: MediaType;
}

export interface Base64Props {
	decodedValue: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}