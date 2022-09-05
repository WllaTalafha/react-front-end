import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from "../App";

test('testing the name', async()=>{
    render (<App/>);
    const name=await screen.findByTestId('nameTest');
    expect(name).toHaveTextContent('hello my name is: wlla');

})
test('testing the age', async()=>{
    render (<App/>);
    const name=await screen.findByTestId('ageTest');
    expect(name).toHaveTextContent('my age after 5 years will be: 25');

})


// test('testing the age', async()=>{
//     render (<App/>);
//     const name=await screen.findByTestId('name');
//     expect(name).toHaveTextContent('hello my name is wlla');

// })

// test('testing the input', async()=>{
//     render (<App/>);
//     const name=await screen.findByTestId('name');
//     const input=await screen.findByTestId('input');
//     fireEvent.change(input,{target:{value:'mhmd'}})
//     expect(name).toHaveTextContent('mhmd');
// })