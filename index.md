# useState hook

### Dùng khi nào ? 

Khi muốn dữ liệu thay đổi thì giao diện tự dộng được cập nhật (render lại theo dữ liệu)

### Cách dùng 

```jsx
import {useState} from 'react'

function Component() {
    const [state,setState] = useState(initState)

    ...
}
```

### Lưu ý 
  - Component được re-render sau khi `setState`
  - Initial state chỉ dùng cho lần đầu 
  - Set state với callback ?
  - Initial state với callback ?



  ### useEffect() :

  Events : Add/ remove event listener
  ovserver pattern : Subscribe/unSubscribe
  Closure
  Timers : setInterval,setTimeout,clearInterval,clearTimeout
  =>
setInterval(fn, ms): gọi hàm fn lặp lại mỗi ms milliseconds.
setTimeout(fn, ms): gọi hàm fn một lần sau ms milliseconds.
clearInterval(id): dừng việc gọi lặp lại hàm từ setInterval bằng id.
clearTimeout(id): hủy gọi hàm một lần từ setTimeout bằng id.
  useState
  Mounted/unMounted
  ===
  Call API

  1.Update Dom
   -F8 blog title
  2.Call API 
  3.Listen DOM events
     -Scroll
     -Resize
  4.Cleanup
    -Remove Listener/Unsubscribe
    -Clear timer
  

1. useEffect(callback)
=> + Gọi callback mỗi khi component re-render
   + Gọi callback khi component thêm  element vào DOM 
2. useEffect(callback,[])
=> + Gọi callback một lần khi component mounted
3. useEffect(callback,[deps])
=> +  Callback sẽ được gọi mỗi khi deps thay đổi 
   + Cleanup function luôn được gọi trước khi component unmounted


### useEffect
1. Cập nhật lại state
2. Cập nhật DOM(mutated)
3. Render lại UI
4. Gọi cleanup nếu deps thay đổi
5. Gọi useEffect callback


### useLayoutEffect
1. Cập nhật lại state
2. Cập nhật DOM (mutated)
3. Gọi Cleanup nếu deps thay đổi (sync)
4. Gọi useLayoutEffect callback (sync)
5. Render lại UI


