import React, { useRef, useState, useEffect } from 'react';

export default function Section({classes, children, scrollTop}) {
	const sectionRef = useRef();
	const [useAnimation, setUseAnimation] = useState(false);

	useEffect(() => {
		console.log(scrollTop, sectionRef.current.offsetTop, window.innerHeight);
		// first 50 pixels of the element was scrolled and visible on the bottom of the window 
		const expectedScroll = sectionRef.current.offsetTop - window.innerHeight + 50;
		if(scrollTop >= expectedScroll && !useAnimation) {
			setUseAnimation(true);
		}
	}, [scrollTop]);
	return (
	<section ref={sectionRef} className={`${classes} ${useAnimation ? "active" : "" }`}>
		{children}
	</section>
	)
}

