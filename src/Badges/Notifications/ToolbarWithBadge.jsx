import React from 'react';
import PropTypes from 'prop-types';
import { Button, Toolbar } from 'react-md';

import BadgeWithDialog from './BadgeWithDialog';

const ToolbarWithBadge = ({ notifications, onDismiss, onMarkAllRead, onRead}) => (
  <Toolbar
    colored
    title="Notification Assignment"
    actions={<BadgeWithDialog notifications={notifications} onDismiss={onDismiss} onMarkAllRead={onMarkAllRead} onRead={onRead}/>}
  />
);

ToolbarWithBadge.propTypes = {
  onDismiss: PropTypes.func.isRequired,
  onMarkAllRead: PropTypes.func.isRequired,
  notifications: PropTypes.array.isRequired,
  onRead: PropTypes.func.isRequired,
};
export default ToolbarWithBadge;
