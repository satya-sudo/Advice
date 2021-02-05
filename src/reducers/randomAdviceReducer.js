const randomAdviceReducer = (state={},action) => {
    switch (action.type){
        case 'FETCH_RANDOM_ADVICE':
            return action.payload;
        default:
            return state;    
    }
};
export default randomAdviceReducer;