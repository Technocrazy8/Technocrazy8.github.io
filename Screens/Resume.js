import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>Welcome to my React webpage.</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));