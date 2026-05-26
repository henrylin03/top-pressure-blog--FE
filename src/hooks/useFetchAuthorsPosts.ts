import { useCallback, useEffect, useState } from "react";
import { JWT_LOCALSTORAGE_KEY } from "@/contexts/auth";
import type { Post, AuthoredPostType as PublishedStatus } from "@/types/post";

const BASE_URL = `${import.meta.env.VITE_API_URL}/api/v1/users/me/posts`;

export const useFetchAuthorsPosts = (postsStatus: PublishedStatus) => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");

	const url = `${BASE_URL}?published=${postsStatus === "published"}`;

	const fetchData = useCallback(async () => {
		try {
			const jwt = localStorage.getItem(JWT_LOCALSTORAGE_KEY);
			if (!jwt) throw new Error("User must be logged in to do this");
			const res = await fetch(url, {
				headers: { Authorization: `Bearer ${jwt}` },
			});

			const { posts } = await res.json();
			setPosts(posts);
		} catch (error) {
			error instanceof Error
				? setError(error.message)
				: setError(String(error));
		} finally {
			setIsLoading(false);
		}
	}, [url]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return { posts, isLoading, error, fetchData };
};
