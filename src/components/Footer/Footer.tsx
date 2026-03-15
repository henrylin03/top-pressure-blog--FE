import { ActionIcon, Group } from "@mantine/core";
import type { IconLink } from "src/data/socialsLinks";
import logo from "/images/logo.png";
import styles from "./Footer.module.css";

interface Props {
	links: IconLink[];
}

const Footer = ({ links }: Props) => (
	<footer className={styles.footer}>
		<Group gap="sm" className={styles.copyrightContainer}>
			<img
				src={logo}
				loading="lazy"
				alt="logo"
				width="32"
				height="32"
				className={styles.logo}
			/>
			<p className={styles.copyrightText}>
				<small>© {new Date().getFullYear()} Henry Lin</small>
			</p>
		</Group>
		<Group gap="xs" className={styles.socials}>
			{links.map((link) => (
				<ActionIcon
					variant="white"
					key={link.label}
					aria-label={`Check out my ${link.label}`}
					component="a"
					href={link.href}
					target="_blank"
					rel="noreferrer"
					radius="xl"
					p="xs"
					color="grey"
					size={40}
				>
					<link.icon />
				</ActionIcon>
			))}
		</Group>
	</footer>
);

export default Footer;
