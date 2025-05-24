import {  useReducer ,useRef} from "react";
import reducer, {initState} from "./reducer"
import { addJob,setJob,deleteJob } from "./action";
// const initState = {
//     job : ' ',
//     jobs : []
// }

// const SET_JOB = 'set_job';
// const ADD_JOB = 'add_job';
// const DELETE_JOB = 'delete_job';



// const reducer = (state,action) =>{
//     let newJob;
//     switch(action.type){
//         case SET_JOB : 
//           newJob = {
//             ...state,
//             job : action.payLoad
//           }
//           break;
//         case ADD_JOB : 
//          newJob = {
//             ...state,
//             jobs : [...state.jobs,action.payLoad]
//          }
//          break;
//         case DELETE_JOB :
//             const newJobs = [...state.jobs]
//             newJobs.splice(action.payLoad,1);
//             newJob = {
//                 ...state,
//                 jobs : newJobs
//             }
//          break;
//          default:
//             throw new Error('InitState Action')
//     }
//     return newJob
// }
function App(){
  const [state,dispatch] = useReducer(reducer,initState);
  const {job,jobs} = state;
  const inputRef = useRef();
  const handleAdd = () => {
     dispatch(addJob(job));
     dispatch(setJob(''));
     inputRef.current.focus();
  }

  return (
    <div >
      <h3>TodoList</h3>
      <input
       ref={inputRef}
       value={job}
       onChange={e => dispatch(setJob(e.target.value))}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {jobs.map((job,index)=>(
            <li key={index}>{job}
             <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
            </li>
        ))}
      </ul>
    </div>
  )
}
export default App;
