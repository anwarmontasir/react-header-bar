import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './components/navigation-bar';
import './index.css';
import * as serviceWorker from './serviceWorker';

const links = [{
    text: 'Courses',
    href: 'http://www.thinkful.com/courses/'
}, {
    text: 'Mentorship',
    href: 'http://www.thinkful.com/mentorship/'
}]

ReactDOM.render(<NavigationBar title="Thinkful" links={links} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
