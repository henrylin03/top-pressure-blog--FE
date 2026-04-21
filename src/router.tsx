import { createBrowserRouter } from "react-router";
import Posts from "@/pages/Posts";
import App from "./App";
import ErrorPage from "./pages/Error";
import LoginPage from "./pages/Login";
import { SignUpPage } from "./pages/SignUp";

const routes = [
	{ path: "/", element: <Posts /> },
	{ path: "/posts", element: <Posts /> },
	{ path: "/login", element: <LoginPage /> },
	{ path: "/signup", element: <SignUpPage /> },
];

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: routes,
		errorElement: <ErrorPage />,
	},
]);

export { router };
