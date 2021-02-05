import React from 'react';
import {connect} from 'react-redux';
import {fetchRandomAdvice}  from '../actions';
import AdviceBody from './AdviceBody';
class  Body extends React.Component {

    
    componentDidMount() {
        this.props.fetchRandomAdvice();
        
    }
    renderSlips() {
        if (!(Object.keys(this.props.slips).length === 0 && this.props.slips.constructor === Object)){
            if (this.props.slips.slips){
            const a = this.props.slips.slips.map(slip => {
                console.log(slip)
                return  <AdviceBody advice={slip.advice} />
            })
            return a
            }else{
                return <AdviceBody advice={this.props.slips.message.text} /> }
        }
    }
    render(){
        console.log(this.props.slips)
        console.log(this.props.slip,"slip")
        if (Object.keys(this.props.slips).length === 0 && this.props.slips.constructor === Object) {
            if (this.props.slip.advice){
                return (
                    <div>
                        <AdviceBody advice={this.props.slip.advice} />
                    </div>
                    
                )
            }else{
                return (
                    <div>
                        
                    </div>
                )}
            
        }else{
            return (
                <div>
                    {this.renderSlips()}
                </div>
            )
        }
        
    }
    
};
const mapStateToProps = (state) => {
    return { 
        slip: state.randomAdvice,
        slips: state.queryAdvice,
    };
}
export default connect(mapStateToProps,{fetchRandomAdvice}) (Body);
