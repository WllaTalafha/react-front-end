import {useState} from 'react';
import Person from './component/person';
import axios from 'axios';

function App() {
  const [name ,setName]=useState('wlla');
  const [age ,setAge]=useState('25');
  const [gender ,setGender]=useState('female');

  const handleChange = async(e)=>{
    e.preventDefault();
    const url = `${process.env.REACT_APP_URL}/person`;
    const object = {age:e.target.a.value};
    let response = await axios.post(url,object);
    console.log(response.data);
    let theAge = response.data;
    setName(e.target.n.value);
    setGender(e.target.g.value);
    setAge(theAge);           
  }

  return (
    <div>
      <Person name={name} age={age} gender={gender} function={handleChange}/>
    </div>
  );
}

export default App;
