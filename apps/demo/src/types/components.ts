/**
 * Represents an option in a dropdown menu.
 */
export interface DropdownOption {
	label: string; /// The label to display for the option. 
	onClick: () => void; /// Function to be executed when the option is clicked.
}

/**
 * Props for the Dropdown component.
 */
export interface DropdownProps {
	options: DropdownOption[]; /// Array of dropdown options.
}

/**
 * Represents a blog post.
 */
export interface Post {
	id?: number; /// Unique identifier for the post
	title: string; /// Title of the post
	body: string; /// Content of the post
	userId: number; /// ID of the author
}

/**
 * Props for the BaseModal component.
 */
export interface ModalProps {
	open: boolean; /// Controls whether the modal is open or closed.
	onClose: () => void; /// Function triggered when the modal is closed.
	title?: string; /// Optional title displayed at the top of the modal.
	children?: React.ReactNode; /// Content to be rendered inside the modal.
}

/**
 * Props for the PostModal component, extending BaseModal props.
 */
export interface PostModalProps extends ModalProps {
	data?: Post | null; /// Optional post data for editing, or null when creating a new post.
	onSubmit?: (formData: Post) => void; /// Function triggered when submitting the form.
}