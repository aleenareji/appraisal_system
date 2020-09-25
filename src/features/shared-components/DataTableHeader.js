import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const DataTableHeader = props => {
  const title = props.title || 'title';
  const buttonIcon = props.icon || 'plus';
  const onClicked = () => {
    props.onClick();
  };
  return (
    <div className="tableHeader">
      <div>
        <IconButton onClick={onClicked}>
          <AddCircleIcon color="primary" fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default DataTableHeader;
