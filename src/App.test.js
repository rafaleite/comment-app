import React from 'react';
import {shallow, mount, render} from 'enzyme'
import App from './App';

describe('<App />', () => {
    const base = {
        syncState: jest.fn()
    }

    it('renders without crashing', () => {
        const wrapper = shallow(<App base={base} />)
        expect(wrapper.length).toBe(1)
    })

    it('should have .container class', () => {
        const wrapper = shallow(<App base={base} />)
        expect(wrapper.is('.container')).toBe(true)
    })

    it('show Comments', () => {
        const wrapper = shallow(<App base={base} />)
        expect(wrapper.find('Comments').length).toBe(1)
    })

    it('show NewComment', () => {
        const wrapper = shallow(<App base={base} />)
        expect(wrapper.find('NewComment').length).toBe(1)
    })

    it('adds a new comment to state', () => {
        const wrapper = mount(<App base={base} />)
        wrapper.instance().postNewComment({ comment: 'teste 1' })
        wrapper.instance().postNewComment({ comment: 'teste 2' })
        wrapper.instance().postNewComment({ comment: 'teste 3' })

        const comments = Object.keys(wrapper.instance().state.comments)
        expect(comments.length).toBe(3)
    })

})

