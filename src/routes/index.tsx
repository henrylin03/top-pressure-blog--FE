import Feed from "@components/Feed/Feed";
import { Container } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { PublishedPostPreview } from "@/types/post";
import styles from "../styles/Home.module.css";

const Index = () => {
	const [posts, setPosts] = useState<PublishedPostPreview[]>([]);

	useEffect(() => {
		fetch("/api/posts")
			.then((res) => res.json())
			.then((data) => setPosts(data.posts));
	}, []);

	return (
		<Container my="xl" h="100%">
			<header>
				<h1 className={styles.heading}>Top Pressure Blog</h1>
				<p className={styles.text}>
					This blog is a place for submission grappling hobbyists to share
					learnings. Whether you're a wrestler, judoka, jiujitero or just love
					giving hugs to the homies, all are welcome here.
				</p>
			</header>

			{posts.length > 0 && <Feed posts={posts} />}
		</Container>
	);
};

export const Route = createFileRoute("/")({
	component: Index,
});
