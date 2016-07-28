function getId(state) {
  return state.list_users.reduce((maxId, list) => {
    return Math.max(list.id, maxId)
  }, -1) + 1
}
let reducer= function (state,action){
switch(action.type)
{
	case 'ADD_USER':
    
    return Object.assign({},state,{
    	list_users:[{
        uName:action.uName,
        completed:false,
        id:getId(state)

    	}, ...state.list_users]
    })
    case 'DELETE_USER':
    return Object.assign({},state,{
        list_users: state.list_users.filter((list)=> {
            return list.id!== action.id})
    })


	default:return state;
}	

}
export default reducer