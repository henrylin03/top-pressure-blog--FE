export type PublishedPost = {
	id: string;
	author: string;
	lastModifiedAt: Date;
	publishedAt: Date;
	title: string;
	lede: string;
	text: string;
	timeToReadInMinutes: number;
};

export type PublishedPostPreview = Pick<
	PublishedPost,
	"id" | "publishedAt" | "title" | "lede"
>;
