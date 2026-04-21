import { useEffect, useState } from "react";
import { JWT_LOCALSTORAGE_KEY } from "@/contexts/auth";
import type { Post } from "@/types/post";

const BASE_URL = `${import.meta.env.VITE_API_URL}/api/v1/posts` as const;

export const useFetchPost = (postId: string) => {
	const [post, setPost] = useState<Post | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const jwt = localStorage.getItem(JWT_LOCALSTORAGE_KEY) || "";

	useEffect(() => {
		const fetchPost = async () => {
			setIsLoading(true);
			try {
				const res = await fetch(`${BASE_URL}/${postId}`, {
					headers: {
						Authorization: jwt ? `Bearer ${jwt}` : "",
					},
				});
				const { post } = await res.json();
				setPost(post);
			} catch (error) {
				error instanceof Error
					? setError(error.message)
					: setError(String(error));
			} finally {
				setIsLoading(false);
			}
		};

		fetchPost();
	}, [jwt, postId]);

	return { post, isLoading, error };
};
