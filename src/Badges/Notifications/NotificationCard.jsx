import React from 'react';
import PropTypes from 'prop-types';
import { Card, Media } from 'react-md';

import Dismiss from './Dismiss';

const NotificationCard = ({ id, image, alt, message, unread, index, onDismiss, onRead}) => (
  <Card id={id} className={"md-cell md-cell--12 badges__notifications__notification "+(unread?"unread":"read")} onClick={()=>onRead(index)}>
    <div className="badges__notifications__notification__image">
      <Media aspectRatio="1-1">
        <img src={image} alt={alt} />
      </Media>
    </div>
    <p className={"badges__notifications__notification__text " + (unread?"unread":"read")}>{message}</p>
    <Dismiss index={index} onClick={onDismiss} cardId={id} />
  </Card>
);

NotificationCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  unread: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  onDismiss: PropTypes.func.isRequired,
  onRead: PropTypes.func.isRequired,
};

export default NotificationCard;
