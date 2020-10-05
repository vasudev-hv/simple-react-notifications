import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Badge, Button } from 'react-md';

import NotificationDialog from './NotificationDialog';

export default class BadgeWithDialog extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    onDismiss: PropTypes.func.isRequired,
    onMarkAllRead: PropTypes.func.isRequired,
    notifications: PropTypes.array.isRequired,
    onRead: PropTypes.func.isRequired,
    };

  state = { visible: false };

  componentDidMount() {
    this.badge = document.getElementById('notification-badge-toggle');
  }

  componentDidUpdate(prevProps, prevState) {
    const { visible } = this.state;
    if (visible === prevState.visible) {
      return;
    }

    window[`${visible ? 'add' : 'remove'}EventListener`]('click', this.handleOutsideClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleOutsideClick);
  }

  toggleDialog = () => {
    this.setState({ visible: !this.state.visible });
  };

  handleOutsideClick = (e) => {
    if (!this.badge || !this.badge.contains(e.target)) {
      this.setState({ visible: false });
    }
  };

  render() {
    const { visible } = this.state;
    const { notifications, className, onMarkAllRead, onRead, onDismiss } = this.props;
    let unreadNotificationsCount = 0;
    for (let i=0; i<notifications.length; i++) {
      if (notifications[i].unread===true) {
        unreadNotificationsCount++;
      }
    }

    return (
      <Badge
        id="notification-badge-toggle"
        className={className}
        secondary
        aria-haspopup
        badgeId="notification-badge"
        badgeContent={unreadNotificationsCount}
      >
        <Button icon onClick={this.toggleDialog} aria-describedby="notification-badge">
          notifications
        </Button>
        <NotificationDialog visible={visible} onDismiss={onDismiss} notifications={notifications} onMarkAllRead={onMarkAllRead} onRead={onRead}/>
      </Badge>
    );
  }
}
