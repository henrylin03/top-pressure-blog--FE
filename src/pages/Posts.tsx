import { Container, Text, Title } from "@mantine/core";
import Feed from "@/components/PostsFeed";

const PostsPage = () => (
	<>
		<title>Latest Posts | Top Pressure Blog for Grapplers</title>
		<Container my="3rem">
			<header>
				<Title order={1} fz={{ base: "2.5rem", sm: "2.75rem" }} mb="sm">
					Top Pressure Blog
				</Title>
				<Text c="dark.6">
					This blog is a place for submission grappling hobbyists to share
					learnings. Whether you're a wrestler, judoka, jiujitero or just love
					giving hugs to the homies, all are welcome here.
				</Text>
			</header>

			<Feed />
		</Container>
	</>
);

export default PostsPage;
