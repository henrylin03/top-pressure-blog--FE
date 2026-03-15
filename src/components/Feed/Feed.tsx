import PreviewCard from "@components/PreviewCard/PreviewCard";
import { Stack } from "@mantine/core";
import type { Post } from "@/data/fakePosts";
import styles from "./Feed.module.css";

interface Props {
	posts: Post[];
}

const Feed = ({ posts }: Props) => (
	<section>
		<Stack component="ul" className={styles.list}>
			{posts.map((post) => (
				<li key={post.linkToFullText}>
					<PreviewCard post={post} />
				</li>
			))}
		</Stack>
	</section>
);

export default Feed;
