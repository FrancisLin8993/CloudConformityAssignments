import React from 'react';
import './App.css';
import BodyWrapper from './bodyWrapper/BodyWrapper';
import HeaderWrapper from './headerWrapper/HeaderWrapper';
import FooterWrapper from './footerWrapper/FooterWrapper';

class App extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.toggleBodyClass);
    this.toggleBodyClass();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleBodyClass);
  }

  // When starting scrolling, add the 'scroll' class in the body tag to achieve corresponing effect.
  // When scrolling back to the top of the page, remove the scroll class.
  toggleBodyClass = () => {
    if (window.scrollY > 0) {
      document.body.classList.add('scroll');
    } else {
      document.body.classList.remove('scroll');
    }
  };

  render() {
    return (
      <div className="App">
        <HeaderWrapper />
        <BodyWrapper />
        <FooterWrapper />
      </div>
    );
  }
}

export default App;
