import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()})

const setup = () => shallow(<App/>)

const findByTestAttr = (wrapper,val) =>wrapper.find(`[data-test='${val}']`)


test("renders without error",() => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)

});

test("renders button",()=>{

})

test("renders counter display",()=>{
  const wrapper = setup()
  const counterDisplayer = findByTestAttr(wrapper,'counter-displayer')
  expect(counterDisplayer.length).toBe(1)
})

test("counter starts at 0",() => {
  const wrapper = setup()
  const count = findByTestAttr(wrapper,"count").text();
  expect(count).toBe("0") 
})
test("clicking on button increments counter display",()=>{
  const wrapper = setup()
  const button = findByTestAttr(wrapper,'increment')
  button.simulate('click')

  const count = findByTestAttr(wrapper,"count").text();

  expect(count).toBe("1")
})

test("renders decrement btn",() => {
  const wrapper = setup()
  const decrement = findByTestAttr(wrapper,"decrement")
  expect(decrement.length).toBe(1)
})

test("clicking on button decrements counter display",() => {
  const wrapper = setup()
  const decrement = findByTestAttr(wrapper,"decrement")
  decrement.simulate('click')
  const count = findByTestAttr(wrapper,"count").text()

  expect(count).toBe("-1")
})

// test("is error shown",() => {
//   const wrapper = setup()
//   const msg = findByTestAttr(wrapper,"msg")
//   const check = msg.hasClass('hidden')
//   expect(check).toBe(true)
// })