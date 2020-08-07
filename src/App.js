import React, { Component } from 'react';
import './App.css';
export class App extends Component {
	state = {
		file: ''
	};
	onChangeHandler = (e) => {
		const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({file: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
	};
	render() {
		return (
			<div className="main">
				<div className="container">
          <div className="h1">

          <h1>View your PDF File</h1>
          </div>
					<input type="file" className="input" name="input" id="input" onChange={this.onChangeHandler} />
					<div className="label">
          <label htmlFor="input">
						<span class="material-icons">add_circle</span>
					</label>
          </div>
					<div className="window">
          <iframe src={this.state.file} title='This is an PDF window' frameborder="0" width="95%" height="500px" />
          </div>
				</div>
			</div>
		);
	}
}

export default App;
