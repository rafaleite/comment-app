import React from 'react';
import {shallow, mount, render} from 'enzyme'
import createFragment from 'react-addons-create-fragment';
import Comment from './Comment';

describe('<Comment />', () => {

    it('renders without crashing', () => {
        const comment = createFragment({
            comment: 'test'
        })

        const wrapper = shallow(<Comment comment={comment} />)
        expect(wrapper.length).toBe(1)
        expect(wrapper.is('.well')).toBe(true)
        expect(wrapper.text()).toBe('test')
    })

})