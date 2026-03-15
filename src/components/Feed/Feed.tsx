import PreviewCard from "@components/PreviewCard/PreviewCard";
import { Pagination, Stack } from "@mantine/core";
import { useState } from "react";
import type { Post } from "@/data/fakePosts";
import styles from "./Feed.module.css";

interface Props {
	posts: Post[];
}

function chunk<T>(array: T[], size: number): T[][] {
	if (!array.length) return [];
	const head = array.slice(0, size);
	const tail = array.slice(size);
	return [head, ...chunk(tail, size)];
}

const Feed = ({ posts }: Props) => {
	const [activePage, setPage] = useState(1);
	const MAX_ITEMS_ON_SINGLE_PAGE = 5;

	const chunkedPosts = chunk(posts, MAX_ITEMS_ON_SINGLE_PAGE);

	return (
		<Stack component="section" my="xl" className={styles.section}>
			<Stack component="ul" className={styles.list}>
				{chunkedPosts[activePage - 1].map((post) => (
					<li key={post.linkToFullText}>
						<PreviewCard post={post} />
					</li>
				))}
			</Stack>

			<Pagination
				total={Math.ceil(posts.length / MAX_ITEMS_ON_SINGLE_PAGE)}
				value={activePage}
				onChange={setPage}
				className={styles.pagination}
			/>
		</Stack>
	);
};

export default Feed;
