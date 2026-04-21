import { createBrowserRouter } from "react-router";
import Posts from "@/pages/Posts";
import App from "./App";
import LoginPage from "./pages/Login";

const routes = [
	{ path: "/", element: <Posts /> },
	{ path: "/posts", element: <Posts /> },
	{ path: "/login", element: <LoginPage /> },
];

const router = createBrowserRouter([
	{ path: "/", element: <App />, children: routes },
]);

export { router };
