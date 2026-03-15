export type Post = {
	title: string;
	lede: string;
	postedDate: Date;
	linkToFullText: string;
};

export const POSTS: Post[] = [
	{
		title: "The Deep Half: With Even Deeper Analysis",
		lede: "Deep half guard looks chaotic, but it’s actually a clever way to get under someone’s balance. Once you’re underneath their hips, sweeping them becomes surprisingly realistic.",
		postedDate: new Date(),
		linkToFullText: "/posts/test-post-1",
	},
	{
		title: "The Art of Top Pressure: How to Make Every Position Feel Heavy",
		lede: "Some people feel ridiculously heavy on top, even if they’re not big. The secret isn’t strength — it’s how they distribute their weight.",
		postedDate: new Date(),
		linkToFullText: "/posts/test-post-2",
	},
];
