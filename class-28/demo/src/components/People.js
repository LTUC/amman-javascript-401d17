import { useEffect, useState } from "react"

export default function People(props) {
  const [name, setName] = useState('');
  // const [name1, setName1] = useState('');
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  const changeHandler = (e) => {
    // console.log(e.target.value)
    setName(e.target.value)
  }

  const addPeople = (e) => {
    setLoading(true);
    e.preventDefault();
    e.target.reset();
    name && setPeople([...people, name]);
    setLoading(false);
  }

  // const changeHandler2 = (e) => {
  //   // console.log(e.target.value)
  //   setName1(e.target.value)
  // }

  // This one will runs on every rerender
  useEffect(() => {
    // console.log('%c I Run everytime component rerender!', 'background-color: yellow;font-weight:700;')
  });

  useEffect(() => {
    // console.log('%c I will Run for the frst time component render!', 'background-color: red;color:#fff;font-weight:700;')
  }, []);

  useEffect(() => {
    // console.log('%c I will Run once the the name changed!', 'background-color: blue;color:#fff;font-weight:700;')
  }, [name])
  
  
  useEffect(() => {
    // console.log('%c I will Run once the the name changed!', 'background-color: green;color:#fff;font-weight:700;')
    if(people.length > 0) { console.log(`Welcome ${name}`); }
  }, [name, people])

  useEffect(() => {
    return(() => {
      console.log('component unmounted!!!')
    })
  })

  console.log(people)
  return (
    <>
      <form onSubmit={addPeople}>
        <input id='personName' onChange={changeHandler} />
        {/* <input id='personName' onChange={changeHandler2}/> */}
        <button>save</button>
      </form>

      {
        !loading &&
        people.map(person => 
          <p>{person}</p>
        )
      }
    </>
  )
}