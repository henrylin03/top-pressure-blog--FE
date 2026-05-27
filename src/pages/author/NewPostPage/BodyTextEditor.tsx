import { Link, RichTextEditor } from "@mantine/tiptap";
import Placeholder from "@tiptap/extension-placeholder";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface Props {
	placeholder: string;
}

const BodyTextEditor = ({ placeholder }: Props) => {
	const editor = useEditor({
		shouldRerenderOnTransaction: true,
		extensions: [
			StarterKit.configure({ link: false }),
			Link,
			Placeholder.configure({ placeholder }),
		],
	});

	return (
		<RichTextEditor editor={editor} variant="subtle">
			<RichTextEditor.Toolbar sticky stickyOffset="var(--docs-header-height)">
				<RichTextEditor.ControlsGroup>
					<RichTextEditor.Bold />
					<RichTextEditor.Italic />
					<RichTextEditor.Underline />
					<RichTextEditor.Strikethrough />
					<RichTextEditor.ClearFormatting />
				</RichTextEditor.ControlsGroup>

				<RichTextEditor.ControlsGroup>
					<RichTextEditor.H1 />
					<RichTextEditor.H2 />
					<RichTextEditor.H3 />
					<RichTextEditor.H4 />
				</RichTextEditor.ControlsGroup>

				<RichTextEditor.ControlsGroup>
					<RichTextEditor.Blockquote />
					<RichTextEditor.Hr />
					<RichTextEditor.BulletList />
					<RichTextEditor.OrderedList />
				</RichTextEditor.ControlsGroup>

				<RichTextEditor.ControlsGroup>
					<RichTextEditor.Link />
					<RichTextEditor.Unlink />
				</RichTextEditor.ControlsGroup>
			</RichTextEditor.Toolbar>

			<RichTextEditor.Content mih="10rem" />
		</RichTextEditor>
	);
};

export default BodyTextEditor;
