import css from './Notification.module.css';
import PropTypes from 'prop-types'

const NotificationMessage = ({message}) => {

    return (

        <h1 className={css.notification}>{message}</h1>
    )

}

NotificationMessage.propTypes = {

    message: PropTypes.string.isRequired
}

export default NotificationMessage;