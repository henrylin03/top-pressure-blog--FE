import { useEffect, useState } from "react";
import { JWT_LOCALSTORAGE_KEY } from "@/contexts/auth";
import type { Post } from "@/types/post";

const BASE_URL = `${import.meta.env.VITE_API_URL}/api/v1/posts` as const;

export const useFetchPost = (postId: string) => {
	const [post, setPost] = useState<Post | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchPost = async () => {
			setIsLoading(true);
			setError("");

			try {
				const jwt = localStorage.getItem(JWT_LOCALSTORAGE_KEY) || "";
				const res = await fetch(`${BASE_URL}/${postId}`, {
					headers: {
						Authorization: jwt ? `Bearer ${jwt}` : "",
					},
				});

				const json = await res.json();
				if (!res.ok) throw new Error(json.error);

				const { post } = json;
				if (!post)
					throw new Error("Error while getting post. Please try again.");
				setPost(post);
			} catch (error) {
				setError(String(error));
				console.error("Error when fetching post:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchPost();
	}, [postId]);

	return { post, isLoading, error };
};
