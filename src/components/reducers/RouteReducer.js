export default function RouteReducer(state="Signin",action){
    
    switch(action.type){
        case "page":
            state=action.data
            return state
        default:
            return state
    }
}
//action i s a dict type : "page" ,data :"signup or data"