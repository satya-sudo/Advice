
const queryAdviceReducer = (state={},action) => {
    switch (action.type){
        case 'FETCH_QUERY_ADVICE':
            return action.payload;
        default:
            return state;    
    }
};

export default queryAdviceReducer;