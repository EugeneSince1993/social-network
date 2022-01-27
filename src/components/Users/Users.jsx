import React from 'react';
import styles from './users.module.css';

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers(
      [
        {
          id: 1,
          photoUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
          followed: false,
          fullName: 'Dmitry',
          status: 'I am a boss',
          location: {city: 'Minsk', country: 'Belarus'}
        },
        {
          id: 2,
          photoUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          followed: true,
          fullName: 'Sasha',
          status: 'I am a boss too',
          location: {city: 'Moscow', country: 'Russia'}
        },
        {
          id: 3,
          photoUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
          followed: false,
          fullName: 'Andrew',
          status: 'I am a boss too',
          location: {city: 'Kiev', country: 'Ukraine'}
        }
      ]
    );
  }

  return (
    <div>
      {
        props.users.map(u => <div key={u.id}>
            <span>
              <div>
                <img src={u.photoUrl} className={styles.userPhoto} />
              </div>
              <div>
                {
                  u.followed ?
                  <button onClick={ () => { props.unfollow(u.id); } }>Unfollow</button> :
                  <button onClick={ () => { props.follow(u.id); } }>Follow</button>
                }
              </div>
            </span>
            <span>
              <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
              </span>
            </span>
          </div>
        )
      }
    </div>
  );
};

export default Users;
