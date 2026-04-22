import { render } from "@testUtils/index";
import { describe, it } from "vitest";
import App from "@/App";

describe("List of posts", () => {
	it("should appear when user goes to /posts page", () => {
		render(<App />);
	});
});
