import {actions} from "./actions"
import { setCookie } from "./cookie"


export const reducer = (state,action)=>{
    if(action.type === actions.REGISTER_USER){
        const {token} = action.payload
        setCookie("token",token)
        return {...state, token}
    }
    if(action.type === actions.SET_ERROR){
        const {msg,show,status} = action.payload
        return {...state, error:{msg,show,state:status}}
    }
    throw new Error("action does not exist")
}