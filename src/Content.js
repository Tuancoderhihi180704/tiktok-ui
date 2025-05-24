/*
import { useEffect, useState } from "react";
const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];
function Content() {
  const [title, setTitle] = useState('');
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState('posts');
  const [showGoToTop, setShowGoToTop] = useState(false)
  const [width,setWidth] = useState(window.innerWidth);
  useEffect(() => {
    document.title = title;
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(posts => setPosts(posts));
  }, [type])
  useEffect(() => {
    const handleShowOnTop = () => {
      setShowGoToTop(window.scrollY >= 200)
    }

    window.addEventListener('scroll', handleShowOnTop)
    // console.log('addEventListener');

    return () => {
      window.removeEventListener('scroll', handleShowOnTop)
      // console.log('removeEventListener');
    }
  }, [])
  useEffect(()=> {
    const handleResize =() => {
       setWidth(window.innerWidth);
    }
    window.addEventListener('resize',handleResize);
    return () => {
    window.removeEventListener('resize',handleResize);
    // console.log('Da remove');
    
    }
  },[])
  return (
    <div>
      <h1>{width}</h1>
      {tabs.map(tab => (
        <button
          key={tab}
          style={tab === type ? {
            color: '#fff',
            background: '#333'
          } : {}}
          onClick={() => setType(tab)}
        >{tab}</button>
      ))}
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
      {showGoToTop && (<button
        style={{
          position: 'fixed',
          right: 20,
          bottom: 20,
        }}
      >Go On Top</button>)}
    </div>
  )
}

export default Content;
*/

// import { useEffect, useState } from "react";

// function Content(){
//   const [countdowm,setCountDowm] = useState(10);
//   useEffect(()=> {
//      const timeCountdowm = setInterval(() =>{
//        setCountDowm(prev => prev - 1);
//     },1000)
//     return  () => {
//        clearInterval(timeCountdowm)
//     }
//   },[])
//   return (
//     <div>
//        <h1>Hello Anh Em F8!</h1>
//        <h2>{countdowm}</h2>
//     </div>
//   )
// }
// export default Content;





// import { useEffect, useState } from "react";

// function Content(){
//   const [avatar,setShowAvatar] = useState();
//   useEffect(()=>{
//     return () => { 
//        avatar && URL.revokeObjectURL(avatar.preview)
//     }
//   },[avatar])
//   const handlePreviewAvatar = (e) => {
//        const file = e.target.files[0];
//        file.preview = URL.createObjectURL(file)
//        setShowAvatar(file)
//   }

//   return (
//     <div>
//       <input
//       type="file"
//       onChange={handlePreviewAvatar}
//     />
//     {avatar && (<img src={avatar.preview} alt="" width='60%'/>)}
//     </div>

//   )
// }
// export default Content;





// import { useEffect, useState } from "react";
// const lession = [
//   {
//     id: 1,
//     title: 'HTML,CSS Pro',
//   },
//   {
//     id: 2,
//     title: 'JAVACSRIPT Pro',
//   },
//   {
//     id: 3,
//     title: 'REACT JS Pro',
//   },
// ]

// function Content(){
//    const [lessionID,setLession] = useState(1);
//    useEffect(()=> {
//     const handleComment = ({detail}) => {
//       console.log(detail);
//     }
//     window.addEventListener(`lession-${lessionID}`,handleComment)
//     return () => {
//       window.removeEventListener(`lession-${lessionID}`,handleComment);
//     }
//    },[lessionID])

//    return (
//     <div>
//        {lession.map(less =>(
//          <li key={less.id}
//              style={{ color : lessionID === less.id ? 'red' : 'black'}}
//              onClick={()=> setLession(less.id)}
//          >{less.title}</li>
//        ))}
//     </div>
//    )
// }
// export default Content;




// import { useLayoutEffect,useState } from "react";

// function Content(){
//     const [count,setCount] = useState(0);
//     useLayoutEffect(()=> {
//         if(count > 3)
//            setCount(0)
//     },[count])
//     const handleCount = () => {
//        setCount(count +1)
//     }
//     return(
//       <div>
//           <h3>{count}</h3>
//          <button onClick={handleCount}>Click Me</button>
//       </div>
//     )
// }
// export default Content;


import { memo } from "react";
function Content({count,onIncrease}){
  console.log('re-render');
  
  return (
    <>
      <h2>Hello Anh em F8! {count}</h2>
    <button onClick={onIncrease}>Click me</button>
    </>
  )
}
export default memo(Content);