import React from 'react';
// import PropTypes from 'prop-types';

import { COLUMN_TYPE } from '../../../util/componentTypes';
import DraggableNewComponent from './DraggableNewComponent';

const propTypes = {
};

export default class DraggableNewColumn extends React.PureComponent {
  render() {
    return (
      <DraggableNewComponent
        id={COLUMN_TYPE}
        type={COLUMN_TYPE}
        label="Column"
        className="fa fa-long-arrow-down"
      />
    );
  }
}

DraggableNewColumn.propTypes = propTypes;
