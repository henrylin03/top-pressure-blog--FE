import { useEffect, useState } from "react";
import type { PublishedPostPreview } from "@/types/post";

const URL = `${import.meta.env.VITE_API_URL}/api/v1/posts` as const;

export const useFetchPosts = (url = URL) => {
	const [posts, setPosts] = useState<PublishedPostPreview[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchPostPreviews = async () => {
			setIsLoading(true);
			try {
				const res = await fetch(url);
				const { posts } = await res.json();
				setPosts(posts);
			} catch (error) {
				error instanceof Error
					? setError(error.message)
					: setError(String(error));
			} finally {
				setIsLoading(false);
			}
		};

		fetchPostPreviews();
	}, [url]);

	return { posts, isLoading, error };
};
