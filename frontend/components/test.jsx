import React from "react";

class TestPhoto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }

    this.handleFile = this.handleFile.bind(this);
  };

  handleFile(e) {
    this.setState({
        audioFile: e.currentTarget.files[0]
    })
  };

  render() {



    return (
    <form>
      <input 
      type="file" 
      // onChange={this.handleFile}
      />
      <button>Upload photo</button>
    </form>
    )
  }
}

export default TestPhoto;