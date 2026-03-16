import { Card, Container, Stack } from "@mantine/core";
import { createFileRoute, Link } from "@tanstack/react-router";
import styles from "@/styles/Login.module.css";
import logoImg from "/images/logo.png";

const LoginPage = () => (
	<Container>
		<Card shadow="sm" maw="40rem" mx="auto">
			<Stack gap="xl" align="center">
				<Stack component="header" align="center" gap={0}>
					<Link to="/" aria-label="Return to home page">
						<img
							src={logoImg}
							alt="Logo of Top Pressure Blog"
							width="80"
							height="80"
							loading="eager"
						/>
					</Link>
					<h2 className={styles.heading}>Welcome back</h2>
				</Stack>
			</Stack>
		</Card>
	</Container>
);

export const Route = createFileRoute("/login")({
	component: LoginPage,
});
