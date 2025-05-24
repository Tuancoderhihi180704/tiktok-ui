// import { useState } from "react";
// function App() {
//   const [count, setCount] = useState(0);
//   const handleIncrease = () =>{
//     setCount(count + 1);
//   }
//   return (
//     <div className="App">
//       <h1>{count}</h1>
//       <button onClick={handleIncrease}>Click Me +1 !</button>
//       <br />
//       <button onClick={() => setCount(count - 1)}>Click Me -1 !</button>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// const gitfs = [
//   'IP12',
//   'IP13',
//   'IP14',
//   'IP15',
// ]
// function App() {
//   const [gitf,setGitf] = useState();
//   const handleRandomGitf = () => {
//     const randomIndex = Math.floor(Math.random() * gitfs.length );
//     setGitf(gitfs[randomIndex]);
//   }
//   return (
//     <div style={{padding : '20px'}}>
//        <h1>{gitf || 'chưa có phần thưởng'}</h1>
//        <button onClick={handleRandomGitf}>Random Nhận Gift</button>
//     </div>
//   )
// }

// export default App;

//one way binding
// import {  useState } from "react";

// function App() {
//   const [name,setName] = useState('');
//   const [email,setEmail] = useState('');
//   // const handleChange = () => {
//   //   setName("Phạm Tuấn");
//   // }
//   const handleOnsubmit = () => {
//       console.log({name,email});

//   }

//   return (
//     <div className="app" style={{padding : '20px'}}>
//       <input
//       value={name}
//       placeholder="Nhập tên của bạn"
//       onChange = {e => setName(e.target.value)}/>
//       <br/>
//       <input
//       value={email}
//       placeholder="Nhập tên của bạn"
//       onChange = {e => setEmail(e.target.value)}/>
//       <br/>
//       <button onClick={handleOnsubmit}>Register</button>
//     </div>
//   )
// }
// export default App;

// import {  useState } from "react";

// const courses = [
//   {
//     id: 1,
//     name: 'HTML',
//   },
//   {
//     id: 2,
//     name: 'CSS',
//   },
//   {
//     id: 3,
//     name: 'JavaScript',
//   }
// ]

// function App(){
//   const [checked,setChecked] = useState([]);
//   function handleChecked(id){
//     setChecked(prev =>{
//       const isChecked  = checked.includes(id);
//       if(isChecked){
//         return checked.filter(item => item !== id);
//       }
//       return [...prev,id];
//     })
//   }
//   function handleOnSubmit(){
//      console.log({ids : checked});

//   }
//   return (
//     <div className="app" style={{padding:'20px'}}>
//       <h1>Danh Sách Khóa Học Lập Trình </h1>
//         {courses.map(course => (
//           <div key={course.id}>
//              <input
//                type="checkbox"
//                checked={checked.includes(course.id)}
//                onChange={() => handleChecked(course.id)}
//              />
//              {course.name}
//           </div>

//         ))}
//         <button onClick={handleOnSubmit}>Register</button>
//     </div>

//   )
// }

// export default App;

// import {  useState } from "react";

// function App(){
//   const storgareJobs = JSON.parse(localStorage.getItem('jobs'))
//   const [job,setJob] = useState('');
//   const [jobs,setJobs] = useState(storgareJobs ?? []);
//   const handleOnSubmit =()=>{

//      setJobs(prev =>{
//        const newJob =  [...prev,job];
//        const jsonJobs = JSON.stringify(newJob);
//        localStorage.setItem('jobs',jsonJobs)
//        return newJob;
//      });
//      setJob('');
//   }
//   return (
//     <div className="app" style={{padding : '20px'}}>
//       <h1>TodoList</h1>
//        <input
//          value={job}
//          onChange={e => setJob(e.target.value)}
//        />
//        <button onClick={handleOnSubmit}>Add</button>

//        <ul>
//           {jobs.map((job,index)=> (
//             <li key={index}>{job}</li>
//           ))}
//        </ul>
//     </div>
//   )
// }

// export default App;

// import {  useState } from "react";
// import Content from "./Content";
// function App(){
//  const [show,setShow] = useState();
//  return (
//    <div className="app">
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       <br/>
//       {(show && <Content/>) ||  `Hiện tại chưa có thông tin`}
//    </div>
//  )
// }

// export default App;

// import {  useState,useCallback } from "react";
// import Content from "./Content";
// function App(){
//  const [count,setCount] = useState(0);
//  const handleClickMe = useCallback(() => {
//   setCount(prev => prev + 1);
// },[] )
//  return (
//    <div className="app">
//      <Content onIncrease={handleClickMe}/>
//      <h3>{count}</h3>
//    </div>
//  )
// }

// export default App;

// import {  useState,useCallback,useMemo,useRef } from "react";
// import Content from "./Content";
// function App(){
//   const [name,setName] = useState('');
//   const [price,setPrice] = useState('');
//   const [products,setProducts] = useState([]);
//   const nameRef = useRef();
//   const handleAdd = () => {
//     setProducts([...products,{
//       name,
//       price : + price
//     }])
//     setName('')
//     setPrice('')
//     nameRef.current.focus();
//   }
//   const total = useMemo(()=>{
//     const result = products.reduce((result,prod)=>{
//         return result + prod.price
//     },0)
//     return result;
//   },[products])
//   return(
//     <div className="app">
//        <input
//          ref={nameRef}
//          value={name}
//          placeholder="Nhập tên"
//          onChange={e => setName(e.target.value)}
//        />
//        <br/>
//        <input
//          value={price}
//          placeholder="Nhập giá"
//          onChange={e => setPrice(e.target.value)}
//        />
//        <br/>
//        <button onClick={handleAdd}>Add</button>
//        Total : {total}
//        <ul>
//          {products.map((product,index)=>(
//           <li key={index}>{product.name} - {product.price}</li>
//          ))}
//        </ul>
//     </div>
//   )
// }

// export default App;

// import {  useReducer } from "react";
// import Content from "./Content";
// const initState = 0;
// const UP_ACTION = 'up';
// const DOWN_ACTION = 'down';

// const reducer = (state,action) =>{
//    switch(action){
//       case UP_ACTION :
//          return state + 1;
//       case DOWN_ACTION :
//         return state - 1;
//       default :
//        throw new Error("Initvalid action");
//    }
// }
// function App(){
//  const [count,dispatch] = useReducer(reducer,initState);

//  return (
//   <>
//     <h1>{count}</h1>
//     <button onClick={() => dispatch(UP_ACTION)}>UP</button>
//     <button onClick={() => dispatch(DOWN_ACTION)}>DOWn</button>
//   </>
//  )
// }

// export default App;

// import ToDoApp from './Todo'

// function App(){
//     return (
//         <div>
//             <ToDoApp/>
//         </div>
//     )
// }
// export default App;

// import Content from "./Content/content";
// import { useContext } from "react";
// import { ThemeContext } from "./Content/ThemeContext";
// import './App.css'

// function App(){
//     const context = useContext(ThemeContext)
//     return(

//         <div>
//             <button onClick={context.toggleTheme}>Toggle Theme</button>
//             <Content/>
//         </div>

//     )
// }
// export default App;

// import {}

// import {useRef} from 'react'
// import { useStore,actions} from "./Store";
// function App(){

//     const [state,dispatch] = useStore();
//     const {todos,todoInput} = state;
//     const inputRef = useRef()
//     // console.log('todoInput' ,todoInput);
//     const handleAdd = () => {
//         dispatch(actions.addToDoInput(todoInput));
//         dispatch(actions.setToDoInput(''));
//         inputRef.current.focus()
//     }
//     // console.log(todos);
//     const handleDelete = () => {
//        dispatch(actions.deleteToDoInput(todoInput));
//     }
//     const handleUpdate = () => {
//         dispatch(actions.upDateToDoInput(todoInput));
//     }
//     return (
//         <div>

//             <h1>Hello Anh em F8</h1>
//             <input
//               ref={inputRef}
//               value={todoInput}
//               placeholder="Enter todo......."
//               onChange={e => {dispatch(actions.setToDoInput(e.target.value))
//               }}
//             />
//             <button onClick={handleAdd}>Add</button>
//             <ul>
//                 {todos.map((todo,index)=>(
//                     <li key={index}>
//                        {todo}
//                        <button onClick={()=> handleDelete()} >Xóa</button>
//                        <button onClick={() =>handleUpdate()}>Cập Nhật</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
// export default App;

// import { useRef } from 'react'
// // Import hook useRef để tạo tham chiếu đến component con

// import Video from "./ImperativeHandle/Video";
// // Import component Video từ thư mục con

// function App(){
//     const videoRef = useRef();
//     // Tạo ref để tham chiếu tới component Video

//     const handlePlay = () => {
//         videoRef.current.play();
//         // Gọi phương thức play() do Video cung cấp qua useImperativeHandle
//     }

//     const handlePause = () => {
//         videoRef.current.pause();
//         // Gọi phương thức pause() do Video cung cấp qua useImperativeHandle
//     }

//     return (
//         <div>
//             <h1>Hello Anh em F8</h1>
//             <Video ref={videoRef}/>
//             {/* Truyền ref từ cha xuống component con */}

//             <button onClick={handlePlay}>Play</button>
//             {/* Khi bấm sẽ gọi play() trên ref */}

//             <button onClick={handlePause}>Pause</button>
//             {/* Khi bấm sẽ gọi pause() trên ref */}
//         </div>
//     )
// }

// export default App;

function App() {
  return (
    <div className="app">
        <h1>Hello</h1>
      
    </div>
  );
}
export default App;
