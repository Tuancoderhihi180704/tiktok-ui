import {SET_JOB,ADD_JOB,DELETE_JOB} from './constaint'
export  const initState = {
    job : ' ',
    jobs : []
}

const reducer = (state,action) =>{
  
    switch(action.type){
        case SET_JOB : 
          return {
            ...state,
            job : action.payLoad
          }
        case ADD_JOB : 
         return {
            ...state,
            jobs : [...state.jobs,action.payLoad]
         }
        case DELETE_JOB :
            const newJobs = [...state.jobs]
            newJobs.splice(action.payLoad,1);
            return {
                ...state,
                jobs : newJobs
            }
         default:
            throw new Error('InitState Action')
    }
  
}
export default reducer