import PreviewCard from "@components/PreviewCard/PreviewCard";
import { Box, Stack } from "@mantine/core";
import type { Post } from "@/data/fakePosts";
import styles from "./Feed.module.css";

interface Props {
	posts: Post[];
}

const Feed = ({ posts }: Props) => (
	<Box component="section" mt="xl">
		<Stack component="ul" className={styles.list}>
			{posts.map((post) => (
				<li key={post.linkToFullText}>
					<PreviewCard post={post} />
				</li>
			))}
		</Stack>
	</Box>
);

export default Feed;
