import type { Comment } from "./comment";
import type { User } from "./user";

export type Post = {
	id: string;
	author: User;
	lastModifiedAt: Date;
	isPublished: boolean;
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

export const AUTHORED_POST_TYPE = ["published", "drafts"] as const;
export type AuthoredPostType = (typeof AUTHORED_POST_TYPE)[number];

export type AuthoredPostPreview = Pick<
	Post,
	"id" | "title" | "lastModifiedAt" | "isPublished" | "publishedAt" | "comments"
>;
