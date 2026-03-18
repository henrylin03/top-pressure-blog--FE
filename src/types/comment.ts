export type Comment = {
	id: string;
	text: string;
	postedAt: Date;
	isEdited: boolean;
	lastEditedAt?: boolean;
};
