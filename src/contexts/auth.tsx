import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import type { User } from "@/types/user";

export type AuthState = {
	user: User | null;
	login: (usernameOrEmail: string, password: string) => Promise<void>;
	logout: () => void;
};

const AuthContext = createContext<AuthState | undefined>(undefined);

export const JWT_LOCALSTORAGE_KEY = "jwt";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	const validateJwt = useCallback(async (token: string) => {
		const res = await fetch(
			`${import.meta.env.VITE_API_URL}/api/v1/validate-jwt`,
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		);
		if (!res.ok) return localStorage.removeItem(JWT_LOCALSTORAGE_KEY);

		const { user } = await res.json();
		if (!user) return localStorage.removeItem(JWT_LOCALSTORAGE_KEY);
		setUser(user);
	}, []);

	useEffect(() => {
		const token = localStorage.getItem(JWT_LOCALSTORAGE_KEY);
		if (!token) return setIsLoading(false);
		validateJwt(token).finally(() => setIsLoading(false));
	}, [validateJwt]);

	if (isLoading)
		return (
			<div>
				<p>Loading...</p>
			</div>
		);

	const login = async (usernameOrEmail: string, password: string) => {
		const loginRes = await fetch(
			`${import.meta.env.VITE_API_URL}/api/v1/login`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ usernameOrEmail, password }),
			},
		);

		if (!loginRes.ok) throw new Error("Authentication failed");
		const { token } = await loginRes.json();
		localStorage.setItem(JWT_LOCALSTORAGE_KEY, token);

		await validateJwt(token);
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem(JWT_LOCALSTORAGE_KEY);
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
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
