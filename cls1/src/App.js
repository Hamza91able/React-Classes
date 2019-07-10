import React, { Component, Fragment } from 'react';
import swal from 'sweetalert';

class App extends Component {

    constructor() {
        super();

        this.state = {
            Name: 'Hamza',
            Age: 32,
        }
    }

    changeName = () => {
        if (this.state.Name === 'Hamza') {
            this.setState({
                Name: 'Shabi'
            }, () => {
                console.log(this.state.Name + ' setState wala')
            })
        } else {
            this.setState({
                Name: 'Hamza'
            })
        }

        // console.log(this.state.Name);

        // let name = 'hamza'

        // Async
        // setTimeout(() => {
        //     name = 'shabi'
        // }, 1000)

        // setTimeout(() => {
        //     console.log('SETTIMEOUT WALA ' + name);
        // }, 1000)

        // console.log(name);
    }

    render() {

        //Arrow function ke andar jo this milta he wo parent function ka milta he
        // swal("Hello world!");
        
        return (
            <Fragment>
                <h1>{this.state.Name}</h1>
                <h1>{this.state.Age}</h1>
                <button onClick={this.changeName}>CHANGE NAME</button>
            </Fragment>
        );
    }
}

export default App;
