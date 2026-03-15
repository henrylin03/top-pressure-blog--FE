export type Post = {
	title: string;
	lede: string;
	postedDate: Date;
	linkToFullText: string;
};

export const POSTS: Post[] = [
	{
		title: "Why the Knee Shield Is Still One of the Best Guards in Modern BJJ",
		lede: "The knee shield quietly solves a lot of problems. It keeps people from smashing you, gives you time to think, and opens up sweeps, underhooks, and leg entries.",
		postedDate: new Date(2026, 2, 14),
		linkToFullText: "/posts/knee-shield-guard",
	},
	{
		title: "3 Simple Half Guard Sweeps That Work at Every Belt Level",
		lede: "Half guard doesn’t have to mean getting smashed. A few simple sweeps — old school, dogfight, and knee lever — can flip the position completely.",
		postedDate: new Date(2026, 2, 10),
		linkToFullText: "/posts/half-guard-sweeps",
	},
	{
		title: "What White Belts Get Wrong About Escaping Side Control",
		lede: "Most beginners try to bench-press their way out of side control. That almost never works. The real sequence is frame, shrimp, and get your knee back inside.",
		postedDate: new Date(2026, 2, 7),
		linkToFullText: "/posts/side-control-escapes",
	},
	{
		title: "The Overlooked Power of Collar Sleeve Guard",
		lede: "Collar sleeve isn’t flashy, but it’s ridiculously effective. Two grips control posture, break balance, and open the door to sweeps and submissions.",
		postedDate: new Date(2026, 2, 2),
		linkToFullText: "/posts/collar-sleeve-guard",
	},
	{
		title: "Why Most Guard Passing Fails (And How to Fix It)",
		lede: "Guard passing usually fails because people rush it. Passing works much better when you control the legs first and slowly collapse the guard.",
		postedDate: new Date(2026, 1, 28),
		linkToFullText: "/posts/guard-passing-mistakes",
	},
	{
		title: "The Beginner’s Guide to Surviving Mount",
		lede: "Mount feels like a nightmare when you’re new. Staying calm, protecting your arms, and slowly rebuilding guard makes the position far more survivable.",
		postedDate: new Date(2026, 1, 24),
		linkToFullText: "/posts/surviving-mount",
	},
	{
		title: "Understanding the Concept of Inside Position",
		lede: "If you control the inside space between you and your opponent, you’re usually winning the exchange. This idea shows up everywhere in jiu-jitsu.",
		postedDate: new Date(2026, 1, 19),
		linkToFullText: "/posts/inside-position",
	},
	{
		title: "The Hidden Value of Training With a Game Plan",
		lede: "Rolling randomly is fun, but having a simple plan — even something basic — makes training way more productive.",
		postedDate: new Date(2026, 1, 15),
		linkToFullText: "/posts/training-game-plan",
	},
	{
		title: "How to Deal With Bigger Training Partners",
		lede: "Rolling with bigger people doesn’t have to be miserable. Frames, angles, and mobility make a huge difference when strength isn’t on your side.",
		postedDate: new Date(2026, 1, 10),
		linkToFullText: "/posts/bigger-training-partners",
	},
	{
		title: "Why Consistency Matters More Than Talent in BJJ",
		lede: "Natural talent helps, but consistency matters way more. Most people who get good at jiu-jitsu simply never stopped showing up.",
		postedDate: new Date(2026, 1, 6),
		linkToFullText: "/posts/consistency-in-bjj",
	},
	{
		title:
			"Deep Half Guard: Why It Still Works (Even When Everyone Knows It’s Coming)",
		lede: "Deep half guard looks chaotic, but it’s actually a clever way to get underneath someone’s balance and tilt them over.",
		postedDate: new Date(2026, 0, 30),
		linkToFullText: "/posts/deep-half-guard",
	},
	{
		title: "The Art of Top Pressure: How to Make Every Position Feel Heavy",
		lede: "Some people feel ridiculously heavy on top even if they’re not big. The secret usually isn’t strength — it’s how they distribute their weight.",
		postedDate: new Date(2026, 0, 25),
		linkToFullText: "/posts/top-pressure",
	},
];
