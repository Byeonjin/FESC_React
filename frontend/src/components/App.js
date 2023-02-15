class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headline: "React Application",
      isUpdateHeadline: false,
    };

    this.handleChangeHeadline = this.handleChangeHeadline.bind(this);
  }

  handleChangeHeadline() {
    if (this.state.isUpdateHeadline) {
      this.setState({
        headline: "React Application",
        isUpdateHeadline: false,
      });
    } else {
      this.setState({
        headline: "NEW HEADLINE! 😃",
        isUpdateHeadline: true,
      });
    }

    /* 
    this.setState({
      headline: "NEW HEADLINE! 😃",
      isUpdateHeadline: true,
    }); 
    */
  }

  render() {
    return (
      <div data-component="App">
        <h1>{this.state.headline}</h1>
        <button
          type="button"
          onClick={this.handleChangeHeadline}
          // disabled={this.state.isUpdateHeadline}
        >
          헤드라인 업데이트
        </button>
      </div>
    );
  }
}

export default App;
