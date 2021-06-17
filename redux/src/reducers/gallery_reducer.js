export default function(state={}, action){
    console.log("calling gallery reducer")
    switch(action.type){
        case 'GET_GALLERY':
            return{...state, galleryNews:action.payload}
        default:
            return state    
    }
}