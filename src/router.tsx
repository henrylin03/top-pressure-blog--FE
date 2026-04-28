import { createBrowserRouter, Navigate } from "react-router";
import ProtectedRoute from "@/components/ProtectedRoute";
import MyPostsPage from "@/pages/author/MyPosts";
import ErrorPage from "@/pages/Error";
import LoginPage from "@/pages/Login";
import PostPage from "@/pages/Post";
import Posts from "@/pages/Posts";
import SignUpPage from "@/pages/SignUp";
import type { AuthoredPostType } from "@/types/post";
import App from "./App";
import PostsTable from "./components/PostsTable";

const DEFAULT_AUTHOR_POST_PAGE: AuthoredPostType = "published";

const routes = [
	{ index: true, element: <Posts /> },
	{ path: "/posts", element: <Posts /> },
	{ path: "/posts/:postId", element: <PostPage /> },

	{ path: "/login", element: <LoginPage /> },
	{ path: "/signup", element: <SignUpPage /> },

	{
		path: "/my-posts",
		element: (
			<ProtectedRoute isAuthorOnly>
				<MyPostsPage />
			</ProtectedRoute>
		),
		children: [
			{
				index: true,
				element: <Navigate to={DEFAULT_AUTHOR_POST_PAGE} replace />,
			},
			{
				path: ":type",
				element: <PostsTable />,
			},
		],
	},
];

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: routes,
		errorElement: <ErrorPage />,
	},
]);

export { DEFAULT_AUTHOR_POST_PAGE, router };
