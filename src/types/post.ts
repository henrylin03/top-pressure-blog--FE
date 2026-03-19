import type { Comment } from "./comment";

export type Post = {
	id: string;
	author: string;
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
