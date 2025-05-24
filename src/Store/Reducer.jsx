import { SET_TODO_INPUT, ADD_TODO_INPUT, DELETE_TODO_INPUT, UP_DATE_TODO_INPUT } from './constants'
const initState = {
   todoInput: '',
   todos: [],
}

function reducer(state, action) {
   switch (action.type) {
      case SET_TODO_INPUT:
         return {
            ...state,
            todoInput: action.payLoad
         }
      case ADD_TODO_INPUT:
         return {
            ...state,
            todos: [...state.todos, action.payLoad]
         }
      case DELETE_TODO_INPUT:
         const newTodo = [...state.todos]
         newTodo.splice(action.payLoad, 1);

         return {
            ...state,
            todos: newTodo
         }
      case UP_DATE_TODO_INPUT:
         const updatedTodos = state.todos.map((todo, index) => {
            if (index === action.payload.index) {
               return action.payload.newValue;
            }
            return todo;
         });
         return {
            ...state,
            todos: updatedTodos
         };
      default:
         throw new Error('Initvalid action')
   }
}
export { initState }
export default reducer