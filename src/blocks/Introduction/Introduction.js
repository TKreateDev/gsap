import Styles from './styles';
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
export default function Introduction() {
    const [fadeinouttext, setFadeinouttext] = useState("Born.")
    const [scrollvelocitytext, setScrollvelocitytext] = useState("Fight.")
    const wrapper = React.useRef();
    const title = React.useRef();
    const secondtitle = React.useRef();

    gsap.registerPlugin(ScrollTrigger)


    useEffect(() => {
        const secondTitleTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: secondtitle.current,
                scrub: true,
                start: 'top center',
                end: 'bottom center',
                toggleActions: 'restart pause restart none'
            }
        });
        gsap.to(title.current, {
                opacity: 0, duration: 1, scrollTrigger: {
                    trigger: title.current,
                    start: 'top center',
                    end: 'bottom center',
                    toggleActions: 'restart pause resume pause'
                }, onComplete: () => {
                    setFadeinouttext("Living")
                    gsap.to(title.current, { opacity: 1, duration: 1 })
                }
            });
        secondTitleTimeline
            .to(secondtitle.current, {
                opacity: 0, onComplete: () => {
                    setScrollvelocitytext("Take Care.")
                }
            })
            .to(secondtitle.current, {
                opacity: 1
            })
    }, [])


    return (
        <Styles.Wrapper ref={wrapper}>
            <Styles.Section>
                <Styles.Title>A Story.</Styles.Title>
            </Styles.Section>
            <Styles.Section>
                <Styles.Title ref={title}>{fadeinouttext}</Styles.Title>
            </Styles.Section>
            <Styles.Section>
                <Styles.Title ref={secondtitle}>{scrollvelocitytext}</Styles.Title>
            </Styles.Section>
            <Styles.Section>
            </Styles.Section>
        </Styles.Wrapper>)
};

