'use strict';
const e = window.React.createElement;

class LikeButton extends window.React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

//    return e(
//      'button',
//      { onClick: () => this.setState({ liked: true }) },
//      '<div> "fgdg"
//      </div>
//    );

return (
  <button onClick={() => this.setState({ liked: true })}>
    Like
  </button>
);

  }
}

const domContainer = document.querySelector('#like_button_container');
console.log(domContainer)
window.ReactDOM.render(e(LikeButton), domContainer);
