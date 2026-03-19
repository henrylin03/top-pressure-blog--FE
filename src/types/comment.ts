import type { Post } from "./post";
import type { User } from "./user";

export type Comment = {
	id: string;
	text: string;
	postedAt: Date;
	isEdited: boolean;
	lastEditedAt?: boolean;
	postId: Post["id"];
	authorId: string;
	author: User;
};
