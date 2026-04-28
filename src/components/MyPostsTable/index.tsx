import { Text } from "@mantine/core";
import { useParams } from "react-router";
import { useFetchAuthorsPosts } from "@/hooks/useFetchAuthorsPosts";
import type { AuthoredPostType } from "@/types/post";
import PublishedPostsTable from "./PublishedPosts";

const MyPostsTable = () => {
	const { type: postType } = useParams();

	const { posts, isLoading, error, fetchData } = useFetchAuthorsPosts(
		postType as AuthoredPostType,
	);

	if (isLoading) return <Text c="dimmed">Loading...</Text>;
	if (error) {
		console.error(error);
		return <Text c="pink">Error occurred: {error}</Text>;
	}

	if (postType === "published")
		return <PublishedPostsTable posts={posts} fetchData={fetchData} />;
};

export default MyPostsTable;
