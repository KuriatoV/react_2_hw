import React from 'react';

  class UserAbout extends React.Component{


 	handleDelete(){
   this.props.actions.deleteUser(this.props.list.id)
 }

  	
 	render(){
 		return(  
 		<div>
 		
               {this.props.list.uName}  <button onClick={this.handleDelete.bind(this)}>Delete user</button>
                 
          
         
        </div>
        );
 

}
 	}



 export default  UserAbout