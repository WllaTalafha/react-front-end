import React from "react";

function Person (props){

    return(
<div>
    <h1 data-testId='nameTest'>hello my name is: {props.name}</h1>
    <h1 data-testId='ageTest'>my age after 5 years will be: {props.age}</h1>
    <h1>I'm a: {props.gender}</h1><br></br>

   <form onSubmit={props.function}>
    <input type='text' name='n' placeholder='type your name'/><br></br>
    <input type='text' name='a' placeholder='type your age'/><br></br>
    <input type='text' name='g' placeholder='type your gender'/><br></br>
    <input type='submit' placeholder='submit'/>
   </form> 
</div>
   
    );
}
export default Person;