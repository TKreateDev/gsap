import Styles from './styles';
import React from 'react';
import gsap from 'gsap';
export default function Introduction() {
    const [text, setText] = React.useState('hello');
    const wrapper = React.useRef();
    const title = React.useRef();

    const CustomAnimationEvent = () => {
        gsap.to(title.current, {opacity: 0, duration: 1, onComplete: () => {
            setText("bye")
            gsap.to(title.current, {opacity: 1, duration: 1})
        }})
        // gsap.from(title.current, {opacity: 1, duration: 1})
    }

    return (
        <Styles.Wrapper ref={wrapper}>
            <Styles.Title ref={title}>{text}</Styles.Title>
            <button onClick={CustomAnimationEvent}>click</button>
        </Styles.Wrapper>)
};

