import { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Dropdown from './components/Dropdown';
import PostModal from '@/components/modals/PostModal';
import { Post } from 'src/types/components';
import { Button } from '@mui/material';
import toast from 'react-hot-toast';
import { useCreatePost, useDeletePost, usePosts } from '@/requests/usePosts';

const HomeView = () => {
    const { data: posts, isLoading, refetch } = usePosts();
    const { mutate: createPost } = useCreatePost();
    const { mutate: deletePost } = useDeletePost();

    const [modal, setModal] = useState<{ open: boolean; post?: Post | null }>({
        open: false,
        post: null,
    });

    /**
     * Toggles the modal for post creation or editing.
     * If a post is provided, the modal opens for editing.
     * If `null` is provided, it opens for creating.
     * If no argument is provided, it closes the modal.
     * 
     * @param {Post | null} [post] - The post to edit, or `null` to create a new one.
     */
    const toggleModal = (post?: Post | null) => {
        setModal({ open: !modal.open, post });
    };

    /**
     * Handles form submission for creating or editing a post.
     * 
     * @param {Post} newPost - The submitted post data.
     */
    const handleSubmit = (newPost: Post) => {
        createPost(newPost, {
            onSuccess: () => {
                toast.success('Post created successfully!');
            },
            onError: () => {
                toast.error('Something went wrong!');
            },
        });

        toggleModal(); // Close modal after submission
    };

    /**
     * Handles deleting a post.
     * 
     * @param {number} postId - The ID of the post to delete.
     */
    const handleDelete = (postId: number) => {
        deletePost(postId, {
            onSuccess: () => {
                refetch();
                toast.success('Post removed successfully');
            },
            onError: () => {
                toast.error('Something went wrong!');
            },
        });
    };

    const columns: GridColDef[] = [
        { field: 'title', headerName: 'Title', flex: 0.7 },
        { field: 'length', headerName: 'Length', flex: 0.2 },
        {
            field: 'menu',
            headerName: 'Menu',
            sortable: false,
            flex: 0.1,
            renderCell: (params) => {
                return (
                    <Dropdown
                        options={[
                            {
                                label: 'Detail',
                                onClick: () => toggleModal(params.row),
                            },
                            {
                                label: 'Delete',
                                onClick: () => handleDelete(params.row.id),
                            },
                        ]}
                    />
                );
            },
        },
    ];

    const rows =
        posts?.map((post: Post) => ({
            id: post.id,
            title: post.title,
            length: post.body.length,
            body: post.body,
        })) || [];

    return (
        <div
            style={{
                height: '100%',
                maxHeight: '80vh',
                width: '90%',
                maxWidth: 900,
                minWidth: 500,
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
            }}
        >
            <Button
                variant="contained"
                color="primary"
                sx={{ mb: 2 }}
                onClick={() => toggleModal(null)}
                aria-label="Create new post"
            >
                Add Post
            </Button>

            <DataGrid
                rows={rows}
                columns={columns}
                loading={isLoading}
                sx={{ width: '100%' }}
                aria-label="Table of posts"
                initialState={{
                    pagination: { paginationModel: { pageSize: 25 } },
                }}
            />

            <PostModal
                open={modal.open}
                onClose={toggleModal}
                data={modal.post}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default HomeView;
