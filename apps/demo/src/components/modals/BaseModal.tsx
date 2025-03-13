import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ModalProps } from "src/types/components";

/**
 * 
 * @param param0 A reusable modal window component.
 * 
 * @component
 * @example
 * <ModalWindow open={isOpen} onClose={handleClose} title="My Modal">
 *   <p>Content goes here</p>
 * </ModalWindow>
 * 
 * @param {Object} props - The props for the modal component.
 * @param {boolean} props.open - Controls whether the modal is open or closed.
 * @param {() => void} props.onClose - Callback function triggered when the modal is closed.
 * @param {string} [props.title] - Optional title of the modal.
 * @param {React.ReactNode} props.children - The content inside the modal.
 * @returns {JSX.Element} The rendered modal component.
 */
export const BaseModal = ({ open, onClose, title, children }: ModalProps): JSX.Element => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title" 
    >
      <Box
        sx={{
          p: 3,
          bgcolor: "background.paper",
          width: "90%",
          maxWidth: 500, 
          mx: "auto",
          mt: "10vh",
          borderRadius: 2,
          boxShadow: 24,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", mb: 2 }}>
          {title && (
            <Typography id="modal-title" variant="h6">
              {title}
            </Typography>
          )}
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        {children}
      </Box>
    </Modal>
  );
};