import { Component } from "react";

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            name: 'Hasan',
            age: 20,
            isDivisible: false
        }
    }

    counterHandler = () => {
        // this.state.counter += 1;
        // if((this.state.counter + 1) % 5 === 0) {
        //     this.setState({
        //         isDivisible: 'Yes'
        //     })
        // } else {
        //     this.setState({
        //         isDivisible: 'No'
        //     })
        // }
        this.setState(
            {
                counter: this.state.counter + 1,
                isDivisible: (this.state.counter + 1) % 5 === 0 ? true : false
                // info: this.state.info.push(this.state.counter)
                // name: 'Bashar'
            }
        )
        console.log('From the count button!', this.state.counter)
    }

    render() {
        // console.log('From the count button!', this.state.counter)

        return (
            <>
                <h1>Class Component</h1>
                <p data-testid='updated-counter'>Counter: {this.state.counter}</p>
                <p data-testid='divisible'>Divisible: {this.state.isDivisible ? 'Yes' : 'No'}</p>
                <p>My name is: {this.state.name}</p>
                <button data-testid='increaseBtn' onClick={this.counterHandler}>Count</button>
            </>
        )
    }
}

export default ClassComponent;