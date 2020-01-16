import React, {Component} from 'react';
import Dishes from "./containers/Dishes/Dishes";

class App extends Component {


    render() {
        const appStyle = {
            maxWidth: '1000px',
            margin: '20px auto',
            border: '1px solid #000'
        };


        return (
            <div style={appStyle}>
                <Dishes/>
            </div>
        );
    }
}

export default App;