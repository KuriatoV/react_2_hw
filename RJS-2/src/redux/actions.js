let actions={
	addNewUser:function(uName){
		return {
	type:'ADD_USER',
	uName:uName
}
     
	},

    deleteUser:function(id){
	return{
		type:'DELETE_USER',
		id:id  
	}
},
 searchUser:function(uName){
	return{
		type:'SEARCH_USER',
		uName:uName 
	}
}



}



export default actions