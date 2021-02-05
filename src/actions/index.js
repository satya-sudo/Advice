import Adise from '../Apis/Advise';

export const fetchRandomAdvice = () => async(dispatch) =>{
    const response = await Adise.get('/advice');
    dispatch({type:'FETCH_RANDOM_ADVICE',payload:response.data.slip});
};

export const fetchQueryAdvice = (query) => async(dispatch) =>{
    const response = await Adise.get(`/advice/search/${query}`);
    dispatch({type:'FETCH_QUERY_ADVICE',payload:response.data});
};