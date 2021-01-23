import React from 'react';
import './options-menu.scss';

import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Fade from '@material-ui/core/Fade';

export const OptionsMenu = ({ 
    options, iconLabel = 'more', 
    onIconClick = () => {}, 
    onItemClick = () => {},
    hasPopup = true,
    menuType = 'long-menu',
    maxListWidth='20ch',
    icon = <MoreVertIcon />
     
}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e) => {
        e.stopPropagation();
        setAnchorEl(e.currentTarget);
        onIconClick(e);
      };
    
    const handleClose = (e) => {
        e.stopPropagation();
        setAnchorEl(null);
      };

    const handleItemClick = (e) => {
        e.stopPropagation();
        onItemClick(e);
        setAnchorEl(null);
    }
    

    return (
        <div>
          <IconButton
            aria-label={iconLabel}
            aria-controls={menuType}
            aria-haspopup={hasPopup}
            onClick={handleClick}
          >
              {icon}
          </IconButton>
          <Menu
            id={menuType}
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            PaperProps={{
              style: {
                maxHeight: 48 * 4.5,
                width: maxListWidth,
              },
            }}
          >
            {
            options && Array.isArray(options) ? options.map((option,idx) => (
              <MenuItem key={ option.id } name={option.id} selected={ option.selected ? true : false } onClick={handleItemClick}>
                {option.name}
              </MenuItem>
            )) : null
            }
          </Menu>
        </div>
      );
}