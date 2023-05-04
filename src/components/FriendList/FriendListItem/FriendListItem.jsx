import css from './FriendListItem.module.css';


export const FriendListItem = ({isOnline, avatar, name, id }) => {
    return <li className={css.item} key={id}>
                 {isOnline ?
                        <span  className={css.statusOnline}></span>
                        : 
                        <span className={css.statusOfline}></span>
                }
                
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <p className="name">{name}</p>
            </li> 
}



