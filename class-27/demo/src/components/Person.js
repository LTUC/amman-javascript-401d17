import { useState } from "react"

export default function Person(props) {
    const [name, setName] = useState(props.name || 'Rama');
    const [age, setAge] = useState(props.age || 24);

    const changeHandler = (e) => {
        setName(e.target.value);
        console.log(name)
    }

    return (
        <>
            <h2 data-testid='name'>Hello my name is: {name}</h2>
            <h3>My age is: {age}</h3>

            <input data-testid='person-name' onChange={changeHandler} />
        </>
    )
}