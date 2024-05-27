import React, { useRef, useState, useEffect } from 'react';

export default function Section({classes="", children, scrollTop, useAnimationEffect=true}) {
	const sectionRef = useRef();
	const [useAnimation, setUseAnimation] = useState(false);

	useEffect(() => {
		// first 50 pixels of the element was scrolled and visible on the bottom of the window 
		const expectedScroll = sectionRef.current.offsetTop - window.innerHeight + 50;
		if(scrollTop >= expectedScroll && !useAnimation) {
			setUseAnimation(true);
		}
	}, [scrollTop]);
	const extraClasses = `${classes ? classes + " " : ""}`;
	const animationClass = `${useAnimationEffect && useAnimation ? "active " : "" }`;
	const visibilityClass = `${useAnimationEffect ? "" : "visible"}`;
	const classesStr = `${extraClasses}${animationClass}${visibilityClass}`;
	return (
	<section ref={sectionRef} 
		className={classesStr}>
		{children}
	</section>
	)
}

