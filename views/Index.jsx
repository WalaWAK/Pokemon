const React = require('react')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };

  class MyFirstComponent extends React.Component {
    render() {
        return (<h1 style={myStyle}>See All The Pokemon!</h1>)
    }
}

module.exports = MyFirstComponent