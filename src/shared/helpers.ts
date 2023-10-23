import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const scrollToTop = () => {
	scroll.scrollToTop();
};

const scrollToBottom = () => {
	scroll.scrollToBottom();
};

const scrollTo = () => {
	scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
};

const scrollMore = () => {
	scroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
};
