import { createContext, useContext, useEffect, useState } from "react";
import type { User } from "@/types/user";

export type AuthState = {
	isAuthenticated: boolean;
	user: User | null;
	login: (usernameOrEmail: string, password: string) => Promise<void>;
	logout: () => void;
};

const AuthContext = createContext<AuthState | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const JWT_LOCALSTORAGE_KEY = "jwt";

	useEffect(() => {
		const token = localStorage.getItem(JWT_LOCALSTORAGE_KEY);
		if (!token) return setIsLoading(false);

		fetch("/api/validate-jwt", {
			headers: { Authorization: `Bearer ${token}` },
		})
			.then((res) => res.json())
			.then((json) => {
				if (!json.user) return localStorage.removeItem(JWT_LOCALSTORAGE_KEY);
				setUser(json.user);
				setIsAuthenticated(true);
			})
			.catch(() => localStorage.removeItem(JWT_LOCALSTORAGE_KEY))
			.finally(() => setIsLoading(false));
	}, []);

	if (isLoading)
		return (
			<div>
				<p>Loading...</p>
			</div>
		);

	const login = async (usernameOrEmail: string, password: string) => {
		const res = await fetch("/api/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ usernameOrEmail, password }),
		});

		if (!res.ok) throw new Error("Authentication failed");

		const json = await res.json();
		setIsAuthenticated(true);
		localStorage.setItem(JWT_LOCALSTORAGE_KEY, json.token);
	};

	const logout = () => {
		setUser(null);
		setIsAuthenticated(false);
		localStorage.removeItem(JWT_LOCALSTORAGE_KEY);
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => {
	const context = useContext(AuthContext);
	if (typeof context === "undefined")
		throw new Error("useAuth must be used with an AuthProvider");
	return context;
};

export { AuthProvider, useAuth };
