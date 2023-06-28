import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.inputRef = React.createRef();
  }

  getEndValue = (i) => {
    let j = i % 10;
    if (j === 1) {
      return i + "st";
    }
    if (j === 2) {
      return i + "nd";
    }
    if (j === 3) {
      return i + "rd";
    }
    return i + "th";
  };

  handleConvert = (e) => {
    e.preventDefault(); // 阻止网页刷新(默认的表单提交行为)

    let inputValue = this.inputRef.current.value;
    // 检查是否为空和是否是数字
    if (inputValue && Number.isInteger(+inputValue)) {
      inputValue = this.getEndValue(+inputValue);
    }

    this.setState({
      input: inputValue // 使用 ref 获取输入框的值
    });
  };

  render() {
    return (
      <>
        <form>
          <input className="input" ref={this.inputRef} />
          <input value={this.state.input} />
          <button className="bottom" onClick={this.handleConvert}>
            Convert
          </button>
        </form>
      </>
    );
  }
}

export default App;
