import Article from './Article';

function Content({changeTitle}) {

    return (
        <>
            <h1>This is a test for a class component</h1>
            <button onClick={() => changeTitle('Class 26')} >Change the title</button>
            <Article />
        </>
    )
}

export default Content;