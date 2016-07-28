import React from 'react';

 
class UsersAdd extends React.Component{
getInitialState: function(){
	return{displayedContacts:this.props.list};
},

constructor(props,context){
	super(props,context)
	this.state={
		inputText:''
	}
}


console.log(displayedContacts);
handleSearch(event){
	var searchQuery=event.target.value.toLowerCase();
	var displayedContacts = this.props.list.filter(function(list){
		var searchValue=list.uName.toLowerCase();
		return searchValue.indexOf(searchQuery)!==-1;
	});
}





 	handleChange(event){

 		this.setState({
 			inputText:event.target.value
   })

 	}

 	handleSubmit(event ){
	event.preventDefault()
	this.props.addNewUser(this.state.inputText)
	this.setState({inputText:event.target.value=''})

}

 	render(){
 		return(

 	 <div>
 	 <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="Type here"
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)
          	onChange={this.handleSearch.bind(this)}
        />
        <input type="submit" value="Submit"/>
        </form>
      </div>
 			);
 	}

 }
 export default UsersAdd