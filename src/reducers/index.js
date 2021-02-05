import {combineReducers} from 'redux';
import randomAdviceReducer from './randomAdviceReducer';
import queryAdviceReducer from './queryAdviceReducer';


export default combineReducers({
    randomAdvice: randomAdviceReducer,
    queryAdvice:queryAdviceReducer
});