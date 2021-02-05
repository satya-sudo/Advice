import React from 'react';

const AdviceBody = (props) => {
    return (
        <div className="ui inverted segment" style={{textAlign:'center',padding:'20px'}}>
        <h2>
            <i className="quote left icon"/>
            {props.advice}
            <i className="quote right icon"/>
        </h2>
       
        
    </div>
    )
}
export default AdviceBody;