import type { Post } from "./post";

export type Comment = {
	id: string;
	text: string;
	postedAt: Date;
	isEdited: boolean;
	lastEditedAt?: boolean;
	postId: Post["id"];
	authorId: string;
	authorUsername: string;
};
