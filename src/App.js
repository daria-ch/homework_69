import React, {Component} from 'react';
import Dishes from "./containers/Dishes/Dishes";
import Cart from "./containers/Cart/Cart";

class App extends Component {


    render() {
        const appStyle = {
            maxWidth: '900px',
            margin: '20px auto',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px'
        };


        return (
            <div style={appStyle}>
                <Dishes/>
                <Cart/>
            </div>
        );
    }
}

export default App;