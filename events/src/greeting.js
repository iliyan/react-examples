import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Greeting'; // appears in console messages
    this.state = {name: 'World'}; // initial state
  }

  setName(event) {
    this.setState({name: event.target.value});
  }

  render() {
    return (
      <form>
        <div>
          <label>Name: </label>
          <input type="text" value={this.state.name}
            onChange={this.setName.bind(this)}/>
        </div>
        <div>
          {this.props.greet}, {this.state.name}!
        </div>
      </form>
    );
  }
}

Greeting.propTypes = {
  greet: React.PropTypes.string.isRequired
  // Numbers pass because they can be coerced to a string.
  // Missing a required prop isn't an error
  // if a default value is specified
};

Greeting.defaultProps = {
  greet: 'Hello'
};

export default Greeting;
