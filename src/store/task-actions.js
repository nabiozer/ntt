import { taskActions } from "./task-slice";
import axios from "axios"



export const task1Loader= () => async (dispatch) => {

    try {
        dispatch(taskActions.task1Request())
       
        const {data} = await axios.get(`https://snetmyapp.herokuapp.com/case1`)
        dispatch(taskActions.task1Success(data))
      

    } catch (error) {
        dispatch(taskActions.task1Error( error.response && error.response.data.message ? error.response.data.message 
            : error.message))
    }
}

export const task2Loader= () => async (dispatch) => {

    try {
        dispatch(taskActions.task2Request())
       
        const {data} = await axios.get(`https://snetmyapp.herokuapp.com/case2`)
        dispatch(taskActions.task2Success(data))
      

    } catch (error) {
        dispatch(taskActions.task2Error( error.response && error.response.data.message ? error.response.data.message 
            : error.message))
    }
}

export const task3aLoader= () => async (dispatch) => {

    try {
        dispatch(taskActions.task3aRequest())
       
        const {data} = await axios.get(`https://snetmyapp.herokuapp.com/get_offer_count`)
        dispatch(taskActions.task3aSuccess(data))
      

    } catch (error) {
        dispatch(taskActions.task3aError( error.response && error.response.data.message ? error.response.data.message 
            : error.message))
    }
}

export const task3bLoader= () => async (dispatch) => {

    try {
        
       
        const {data} = await axios.get(`https://snetmyapp.herokuapp.com/case3`)
        dispatch(taskActions.task3bSuccess(data))
        
      

    } catch (error) {
        dispatch(taskActions.task3bError( error.response && error.response.data.message ? error.response.data.message 
            : error.message))
    }
}