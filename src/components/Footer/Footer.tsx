import { ActionIcon, Group } from "@mantine/core";
import {
	IconBrandGithub,
	IconBrandLinkedin,
	IconFileCv,
} from "@tabler/icons-react";
import logo from "/images/logo.png";
import styles from "./Footer.module.css";

const Footer = () => {
	const SOCIALS_LINKS = [
		{
			label: "Portfolio",
			href: "https://henrylin.io",
			icon: <IconFileCv />,
		},
		{
			label: "GitHub",
			href: "https://github.com/henrylin03/",
			icon: <IconBrandGithub />,
		},
		{
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/henrylin03/",
			icon: <IconBrandLinkedin />,
		},
	];

	return (
		<footer className={styles.footer}>
			<Group gap="sm">
				<img src={logo} loading="lazy" alt="logo" width="32" height="32" />
				<p className={styles.copyrightText}>
					<small>
						Copyright © {new Date().getFullYear()} Henry Lin - All rights
						reserved
					</small>
				</p>
			</Group>
			<Group gap="xs" className={styles.socials}>
				{SOCIALS_LINKS.map((s) => (
					<ActionIcon
						variant="white"
						key={s.label}
						aria-label={`Check out my ${s.label}`}
						component="a"
						href={s.href}
						target="_blank"
						rel="noreferrer"
						radius="xl"
						p="xs"
						color="grey"
						size={40}
					>
						{s.icon}
					</ActionIcon>
				))}
			</Group>
		</footer>
	);
};

export default Footer;
