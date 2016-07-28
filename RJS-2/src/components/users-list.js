//import _ from 'lodash';
import React from 'react';
import  UserAbout from './user-about';
import  UserSearch from './user-search';

class UserList extends React.Component {

  render() {
    return (
      <div>

        {
          this.props.list_users.map((list) => {
            return <UserAbout key={list.id} list={list}
             actions={this.props.actions}/>
          })
        }

      </div>
    )
  }

}


 export default UserList