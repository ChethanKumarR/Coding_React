/* eslint-disable import/no-anonymous-default-export */
//Step 3 ------> action talking to reducer
//reducer will send the data to the store
export default function(state = null, action){
    switch (action.type){
        case "MOVIES_LIST":
            return action.payload
        default:
            return state;
    }
}