import PreviewCard from "@components/PreviewCard";
import { Stack, Text } from "@mantine/core";
import { useFetchPosts } from "@/hooks/useFetchPosts";
import LoadingPreviewCard from "../PreviewCard/LoadingPreviewCard";

const Feed = () => {
	const { posts, isLoading, error } = useFetchPosts();

	if (isLoading)
		return (
			<Stack component="section" my="xl" gap="xl">
				<LoadingPreviewCard />
				<LoadingPreviewCard />
				<LoadingPreviewCard />
			</Stack>
		);

	if (error) return <Text c="red">Error: {error} </Text>;

	return (
		<Stack component="section" my="xl" gap="xl">
			<Stack component="ul">
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
