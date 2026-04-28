import { Text } from "@mantine/core";
import { Navigate, useParams } from "react-router";
import { useFetchAuthorsPosts } from "@/hooks/useFetchAuthorsPosts";
import type { AuthoredPostType } from "@/types/post";
import DraftPostsTable from "./DraftPosts";
import PublishedPostsTable from "./PublishedPosts";

const MyPostsTable = () => {
	const { type: postsType } = useParams();

	const { posts, isLoading, error, fetchData } = useFetchAuthorsPosts(
		postsType as AuthoredPostType,
	);

	if (isLoading) return <Text c="dimmed">Loading...</Text>;
	if (error) {
		console.error(error);
		return <Text c="pink">Error occurred: {error}</Text>;
	}

	if (postsType === "published")
		return <PublishedPostsTable posts={posts} fetchData={fetchData} />;
	if (postsType === "drafts")
		return <DraftPostsTable posts={posts} fetchData={fetchData} />;
	return <Navigate to="/my-posts" replace />;
};

export default MyPostsTable;
