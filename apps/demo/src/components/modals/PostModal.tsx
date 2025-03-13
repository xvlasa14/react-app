import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { BaseModal } from '@/components/modals/BaseModal';
import { Button, Box, Typography } from '@mui/material';
import { PostModalProps } from 'src/types/components';
import FormField from '../form/FormField/FormField';

/**
 * A modal for creating or editing a post.
 * 
 * @component
 * @example
 * <PostModal open={isOpen} onClose={handleClose} onSubmit={handleSubmit} post={postData} />
 * 
 * @param {Object} props - The props for the post modal.
 * @param {boolean} props.open - Controls whether the modal is open or closed.
 * @param {() => void} props.onClose - Callback function triggered when the modal is closed.
 * @param {(post: Post) => void} props.onSubmit - Function called when submitting the post.
 * @param {Post} [props.post] - Optional existing post data for editing.
 * @returns {JSX.Element} The rendered post modal component.
 */

export default function PostModal({ open, onClose, onSubmit, data }: PostModalProps): JSX.Element {
    const validationSchema = Yup.object({
        title: Yup.string()
            .min(5, 'Title is too short')
            .required('Title is required'),
        body: Yup.string()
            .min(50, 'Text is too short')
            .required('Post text is required'),
        userId: Yup.number().optional(),
    });
    return (
        <BaseModal open={open} onClose={onClose}>
            {!!data ? (
                <Box>
                    <Typography component="h2" variant="h5" sx={{mb: 2}}>{data.title}</Typography>
                    <Typography variant="body1">{data.body}</Typography>
                </Box>
            ) : (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Typography component="h2" variant="h5">Create New Post</Typography>
                    <Formik
                        initialValues={{ title: '', body: '', userId: 0 }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { resetForm }) => {
                            if (onSubmit) {
                                onSubmit(values);
                                resetForm();
                                onClose();
                            }
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <FormField name="title" label="Title" type="text" sx={{ mb: 2 }} />
                                <FormField name="body" label="Body" type="text" multiline sx={{ mb: 2 }} />
                                <FormField name="userId" label="User ID" type="number" sx={{ mb: 2 }} />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    sx={{ mt: 2 }}
                                    disabled={isSubmitting}
                                >
                                    Create Post
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Box>
            )}
        </BaseModal>
    );
}
