import { render, screen } from "@testUtils/index";
import { describe, expect, it } from "vitest";
import type { User } from "@/types/user";
import PostHeader from "./Header";

describe("Header of blog post", () => {
	it("should display just the author's username if no first and last name provided", () => {
		const MOCK_AUTHOR: User = {
			id: "test",
			username: "this-should-show",
			email: "test-email@gmail.com",
			isAuthor: true,
		};
		const MOCK_POST = {
			author: MOCK_AUTHOR,
			lastModifiedAt: new Date("2024-01-01"),
			publishedAt: new Date("2024-01-01"),
			title: "test",
			timeToReadInMinutes: 5,
		};

		render(<PostHeader postDetails={MOCK_POST} />);
		const authorElement = screen.getByRole("paragraph", { name: "author" });
		expect(authorElement.textContent).toBe(MOCK_AUTHOR.username);
	});

	it("should display first name and last name if provided", () => {
		const MOCK_AUTHOR: User = {
			id: "test",
			username: "this-should-show",
			email: "test-email@gmail.com",
			isAuthor: true,
			firstName: "John",
			lastName: "Smith",
		};

		const MOCK_POST = {
			author: MOCK_AUTHOR,
			lastModifiedAt: new Date("2024-01-01"),
			publishedAt: new Date("2024-01-01"),
			title: "test",
			timeToReadInMinutes: 5,
		};

		render(<PostHeader postDetails={MOCK_POST} />);
		const authorElement = screen.getByRole("paragraph", { name: "author" });
		expect(authorElement.textContent).toBe("John Smith");
	});

	it("should display just the last name if no first name is given", () => {
		const MOCK_AUTHOR: User = {
			id: "test",
			username: "this-should-show",
			email: "test-email@gmail.com",
			isAuthor: true,
			lastName: "Drake",
		};

		const MOCK_POST = {
			author: MOCK_AUTHOR,
			lastModifiedAt: new Date("2024-01-01"),
			publishedAt: new Date("2024-01-01"),
			title: "test",
			timeToReadInMinutes: 5,
		};

		render(<PostHeader postDetails={MOCK_POST} />);
		const authorElement = screen.getByRole("paragraph", {
			name: "author",
		});
		expect(authorElement.textContent).toBe("Drake");
	});
});
