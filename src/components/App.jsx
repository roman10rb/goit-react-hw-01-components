import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json'
import { Profile } from './Profile/Profile';
import { Statistic } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistic
        stats={data}
        title="Upload stats"
      />

      <FriendList arr={friends} />

      <TransactionHistory items={transactions}/>

    </div>
  );
};

