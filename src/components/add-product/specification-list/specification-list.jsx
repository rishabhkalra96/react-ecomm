import React from 'react';
import './specification-list.scss';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';

export const SpecificationList = ({ addList, deleteList, spec, onUpdate, uniqueID, addBtn}) => {

    return (<div className="flex justify-between p-field">
                <TextField id={`id-${uniqueID}`} variant="outlined" value={spec.id} label="id" onChange={onUpdate} />
                <TextField id={`display_name-${uniqueID}`} variant="outlined" value={spec.display_name} label="name" onChange={onUpdate} />
                <div className="field-wrapper flex">
                <TextField id={`value-${uniqueID}`} label="Value" variant="outlined" value={spec.value} onChange={onUpdate} />
                {
                    addBtn ? 
                        <IconButton aria-label="add more specificaions" color="primary" onClick={addList}><AddCircleOutlineOutlinedIcon/></IconButton> :
                    <IconButton aria-label="delete specification" color="secondary" onClick={deleteList}><HighlightOffOutlinedIcon/></IconButton>
                }
                </div>
            </div>
    )
}