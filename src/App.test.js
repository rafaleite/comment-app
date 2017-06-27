import React from 'react';
import {shallow, mount, render} from 'enzyme'
import App from './App';

describe('<App />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.length).toBe(1)
    })

    it('should have .container class', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.is('.container')).toBe(true)
    })

    it('show Comments', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find('Comments').length).toBe(1)
    })

    it('show NewComment', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find('NewComment').length).toBe(1)
    })

})

