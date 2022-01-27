import React from 'react';
import styles from './users.module.css';

const Users = (props) => {
  return (
    <div>
      {
        props.users.map(u => <div key={u.id}>
            <span>
              <div>
                <img src={u.photoUrl} className={styles.userPhoto} />
              {/* 49.00 */}
              </div>
              <div>
                <button>Follow</button>
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
