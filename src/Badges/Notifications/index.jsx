import React, { PureComponent } from 'react';

import './_styles.scss';
import ToolbarWithBadge from './ToolbarWithBadge';
let NOTIFICATIONS = require('../../fake-google-notification.json');

export default class Notifications extends PureComponent {
  state = { notifications: NOTIFICATIONS };

  dismiss = (index) => {
    const notifications = this.state.notifications.slice();
    notifications.splice(index, 1);
    this.setState({ notifications });
  };

  readNotification = (index) => {
    const notifications = this.state.notifications.slice();
    this.setState({ notifications });
    window.open(notifications[index].redirectUrl, "_blank")
    notifications[index].unread = false
  };

  markAllRead = () => {
    const notifications = this.state.notifications.slice();
    for (let index=0; index<notifications.length; index++) {
      notifications[index].unread = false;
    }
    this.setState({ notifications });
  };

  render() {
    const { notifications } = this.state;
    return (
      <div className="badges__notifications">
        <ToolbarWithBadge notifications={notifications} onDismiss={this.dismiss} onMarkAllRead={this.markAllRead} onRead={this.readNotification} />
      </div>
    );
  }
}
