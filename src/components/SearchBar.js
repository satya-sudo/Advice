import  React from 'react';
import {connect} from 'react-redux';
import { fetchQueryAdvice } from '../actions';

class SearchBar extends React.Component  {

    onSubmitHandle(event){
        event.preventDefault();
        if (event.target[0].value.length !== 0 ){
            this.props.fetchQueryAdvice(event.target[0].value);
        }
        
        
    }

    render() {
        return (
            <form onSubmit={(event) =>this.onSubmitHandle(event)} className="ui inverted fluid icon input">
                <input type="text" placeholder="Search for something specific ..." />
                <i className="search icon" ></i>
            </form>
        );
    

    }
};


export default connect(null,{fetchQueryAdvice})(SearchBar);