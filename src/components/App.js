import  React from 'react'
import Header from './Header'
import Body from './Body';
import Footer from './Footer'

class  App extends React.Component {
    render() {
        return (
            <div className="ui inverted container">
                <Header />
                <Body />
                <Footer />
            </div>
        );
    }
}


export default App;