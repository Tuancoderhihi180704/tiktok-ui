function logger(reducer){
    return(prevState,action) => {
        console.group(action.type)
        console.log('Prev state :', prevState);
        console.log('Action :',action);
        
        const nextstate = reducer(prevState,action)
        console.log('Next state :' ,nextstate);
        console.groupEnd();
        return nextstate
    }
    
}
export default logger