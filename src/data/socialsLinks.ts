import {
	IconBrandGithub,
	IconBrandLinkedin,
	IconFileCv,
	type TablerIcon,
} from "@tabler/icons-react";

export type IconLink = {
	label: string;
	href: string;
	icon: TablerIcon;
};

export const SOCIALS_LINKS: IconLink[] = [
	{
		label: "Portfolio",
		href: "https://henrylin.io",
		icon: IconFileCv,
	},
	{
		label: "GitHub",
		href: "https://github.com/henrylin03/",
		icon: IconBrandGithub,
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/henrylin03/",
		icon: IconBrandLinkedin,
	},
];
