import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    // Set initial state
    this.state = {
      comments: '',
    };
    this.loadData = () => {
      this.setState({
        comments: 'Hello world from react.',
      });
    };
  }
  componentDidMount() {
    this.loadData();
  }
  render() {
    return (
      <div>
        <h1>
          {this.state.comments}
        </h1>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  window.document.getElementById('App'),
);
