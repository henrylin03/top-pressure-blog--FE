import type { Post } from "@/data/fakePosts";

interface Props {
	posts: Post[];
}

const Feed = ({ posts }: Props) => (
	<section>{posts.map((post) => post.title)}</section>
);

export default Feed;
