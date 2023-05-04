import css from './FriendList.module.css'
import { FriendListItem } from './FriendListItem/FriendListItem'
import PropTypes from 'prop-types'; 


export const FriendList = ({ arr }) => {
    return (
        <ul className={css.friendList}>
            {arr.map(friend => {
                return <FriendListItem
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                    name={friend.name}
                    key={friend.id}
                />
            })}
            
        </ul>
    )
}

FriendList.propTypes = {
    arr: PropTypes.array.isRequired,
}