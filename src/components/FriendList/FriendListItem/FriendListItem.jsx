import css from './FriendListItem.module.css';
import PropTypes from 'prop-types'; 

export const FriendListItem = ({isOnline, avatar, name, id }) => {
    return <li className={css.item} key={id}>
                 {isOnline ?
                        <span  className={css.statusOnline}></span>
                        : 
                        <span className={css.statusOfline}></span>
                }
                
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
            </li> 
}



FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    id: PropTypes.string,
}

