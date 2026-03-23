import PreviewCard from "@components/PreviewCard/PreviewCard";
import { Stack, Text } from "@mantine/core";
import { useFetchPosts } from "@/hooks/useFetchPosts";
import PreviewCardLoading from "../PreviewCard/PreviewCardLoading";
import styles from "./Feed.module.css";

const Feed = () => {
	const { posts, isLoading, error } = useFetchPosts();

	if (isLoading)
		return (
			<Stack component="section" my="xl" gap="xl">
				<PreviewCardLoading />
				<PreviewCardLoading />
				<PreviewCardLoading />
				<PreviewCardLoading />
				<PreviewCardLoading />
			</Stack>
		);

	if (error) return <Text c="red">Error: {error} </Text>;

	return (
		<Stack component="section" my="xl" gap="xl">
			<Stack component="ul" className={styles.list}>
				{posts.map((post) => (
					<li key={post.id}>
						<PreviewCard post={post} />
					</li>
				))}
			</Stack>
		</Stack>
	);
};

export default Feed;
