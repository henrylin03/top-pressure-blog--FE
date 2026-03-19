import type { Comment } from "./comment";
import type { User } from "./user";

export type Post = {
	id: string;
	author: User;
	lastModifiedAt: Date;
	publishedAt: Date;
	title: string;
	lede: string;
	text: string;
	timeToReadInMinutes: number;
	comments: Comment[];
};

export type PublishedPostPreview = Pick<
	Post,
	"id" | "publishedAt" | "title" | "lede"
>;
