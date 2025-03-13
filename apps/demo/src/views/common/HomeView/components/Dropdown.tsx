import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { DropdownProps } from 'src/types/components';

/**
 * A dropdown menu component that displays a list of options.
 * 
 * @component
 * @param {DropdownProps} props - The component props.
 * @param {Array<{label: string, onClick: () => void}>} props.options - The list of dropdown options.
 * 
 * @returns {JSX.Element} The rendered Dropdown component.
 */
export default function Dropdown({ options }: DropdownProps): JSX.Element {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);

    /**
     * Opens the dropdown menu.
     * 
     * @param {React.MouseEvent<HTMLElement>} event - The click event.
     */
    const handleOpen = (event: React.MouseEvent<HTMLElement>) =>
        setAnchorEl(event.currentTarget);

    /**
     * Closes the dropdown menu.
     */
    const handleClose = () => setAnchorEl(null);

    return (
        <div>
            <IconButton
                aria-label="options"
                id="dropdown-btn"
                aria-controls={open ? 'options-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleOpen}
            >
                <MoreVertIcon />
            </IconButton>

            <Menu
                id="dropdown-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={index}
                        onClick={() => {
                            handleClose();
                            option.onClick();
                        }}
                    >
                        {option.label}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
