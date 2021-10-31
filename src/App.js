import React from 'react';
import HelloWorld from './HelloWorld';
import AppButton from './AppButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  // addCount = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // };

  // subCount = () => {
  //   this.setState({
  //     count: this.state.count - 1,
  //   })
  // }

  changeCount = (type) => {
    if (type === "add"){
      this.setState(
        {
          count: this.state.count + 1,
        }
      )
    } else if (type === "sub"){
      this.setState(
        {
          count: this.state.count + -1,
        }
      )
    }
  }
  
  render(){
    return (
      <div>
        <HelloWorld name="기원" />
        <HelloWorld name="테스트" />
        <div>Count : {this.state.count}</div>
        {/* <AppButton name="-" onClick={() => this.subCount} />
        <AppButton name="+" onClick={() => this.addCount} /> */}
        <AppButton name="-" onClick={() => this.changeCount("sub")} />
        <AppButton name="+" onClick={() => this.changeCount("add")} />
      </div>  
    )    
  }
}

export default App;
