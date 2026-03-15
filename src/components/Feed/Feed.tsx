import styles from "./Feed.module.css";

type Post = {
	title: string;
	lede: string;
	postedDate: Date;
	linkToFullText: string;
};

interface Props {
	posts: Post[];
}

const Feed = ({ posts }: Props) => {
	return <section className={styles.section}></section>;
};

export default Feed;
