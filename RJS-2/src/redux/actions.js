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
}

//searchUser:function()

}



export default actions