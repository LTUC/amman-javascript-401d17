import { Component } from "react"
import Article from './Article';

class Content extends Component {
    render() {
        return (
            <>
                <h1>This is a test for a class component</h1>
                <button onClick={() => this.props.changeTitle('Class 26')} >Change the title</button>
                <Article />
            </>
        )
    }
}

export default Content;