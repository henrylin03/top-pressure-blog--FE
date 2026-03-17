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

	const validateJwt = async (localStorageKey: string, token: string) => {
		const res = await fetch("/api/validate-jwt", {
			headers: { Authorization: `Bearer ${token}` },
		});
		if (!res.ok) return localStorage.removeItem(localStorageKey);

		const { user } = await res.json();
		if (!user) return localStorage.removeItem(localStorageKey); // not authenticated
		setUser(user);
		setIsAuthenticated(true);
	};

	useEffect(() => {
		const token = localStorage.getItem(JWT_LOCALSTORAGE_KEY);
		if (!token) return setIsLoading(false);
		validateJwt(JWT_LOCALSTORAGE_KEY, token).finally(() => setIsLoading(false));
	});

	if (isLoading)
		return (
			<div>
				<p>Loading...</p>
			</div>
		);

	const login = async (usernameOrEmail: string, password: string) => {
		const loginRes = await fetch("/api/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ usernameOrEmail, password }),
		});

		if (!loginRes.ok) throw new Error("Authentication failed");
		const { token } = await loginRes.json();
		localStorage.setItem(JWT_LOCALSTORAGE_KEY, token);

		await validateJwt(JWT_LOCALSTORAGE_KEY, token);
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
