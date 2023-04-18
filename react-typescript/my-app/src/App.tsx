import React, { Component } from 'react';
import './App.css';

type MyProps = {
  label?: string;
}
type MyState = {
  isOn: boolean | null;
}

function Button(props: MyProps) {
  const [state, setState] = React.useState<MyState>({
    isOn: true
  });
  const toggle = () => setState({ isOn: !state.isOn });

  const { label } = props;
  const { isOn } = state;
  const style = {
    backgroundColor: isOn ? 'green' : 'red'
  }
  return (
    <button style={style} onClick={toggle}>
      {label}
    </button>
  )
}

Button.defaultProps = {
  label: 'hello typescript'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button />
      </div>
    );
  }
}

export default App;
