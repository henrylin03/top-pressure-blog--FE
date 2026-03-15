import Feed from "@components/Feed/Feed";
import { Container } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { POSTS } from "@/data/fakePosts";
import styles from "../styles/Home.module.css";

const Index = () => (
	<Container my="xl" h="100%">
		<header>
			<h1 className={styles.heading}>Top Pressure Blog</h1>
			<p className={styles.text}>
				This blog is a place for submission grappling hobbyists to share
				learnings. Whether you're a wrestler, judoka, jiujitero or just love
				giving hugs to the homies, all are welcome here.
			</p>
		</header>

		<Feed posts={POSTS} />
	</Container>
);

export const Route = createFileRoute("/")({
	component: Index,
});
