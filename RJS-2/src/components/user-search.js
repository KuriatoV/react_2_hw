import React from 'react';


class UserSearch extends React.Component {
constructor(props,context){
  super(props,context)
  this.state={
    inputText:''
  }
}


  handleChange(event){

    this.setState({
      inputText:event.target.value
   })

  }

     handleSearch(event) {
   event.preventDefault();
   this.props.searchUser(this.state.inputText);

               
        
                

            }



  render() {
    return (
      
     <input className="search-field" type="text" placeholder="Search here"  
     onChange={this.handleSearch.bind(this)} ></input>
    )
  }

}


 export default UserSearch