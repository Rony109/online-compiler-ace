import './App.css'
import React, { Component } from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools"


// const defaultValue = `function onLoad(editor) {
//   console.log("i've loaded");
// }`;
// class App extends Component {
// 	onLoad() {
// 	  //console.log("i've loaded");
// 	}
// 	onChange(newValue) {
// 	  //console.log("change", newValue);
// 	  this.setState({
// 		value: newValue
// 	  });
// 	}
  
// 	onSelectionChange(newValue, event) {
// 	  //console.log("select-change", newValue);
// 	  //console.log("select-change-event", event);
// 	}
  
// 	onCursorChange(newValue, event) {
// 	  //console.log("cursor-change", newValue);
// 	  //console.log("cursor-change-event", event);
// 	}
  
// 	onValidate(annotations) {
// 	  //console.log("onValidate", annotations);
// 	}
  
// 	setPlaceholder(e) {
// 	  this.setState({
// 		placeholder: e.target.value
// 	  });
// 	}
// 	setTheme(e) {
// 	  this.setState({
// 		theme: e.target.value
// 	  });
// 	}
// 	setMode(e) {
// 	  this.setState({
// 		mode: e.target.value
// 	  });
// 	}
// 	setBoolean(name, value) {
// 	  this.setState({
// 		[name]: value
// 	  });
// 	}
// 	setFontSize(e) {
// 	  this.setState({
// 		fontSize: parseInt(e.target.value, 10)
// 	  });
// 	}
// 	constructor(props) {
// 	  super(props);
// 	  this.state = {
// 		value: defaultValue,
// 		placeholder: "Placeholder Text",
// 		theme: "monokai",
// 		mode: "javascript",
// 		enableBasicAutocompletion: true,
// 		enableLiveAutocompletion: true,
// 		fontSize: 14,
// 		showGutter: true,
// 		showPrintMargin: true,
// 		highlightActiveLine: true,
// 		enableSnippets: true,
// 		showLineNumbers: true
// 	  };
// 	  this.setPlaceholder = this.setPlaceholder.bind(this);
// 	  this.setTheme = this.setTheme.bind(this);
// 	  this.setMode = this.setMode.bind(this);
// 	  this.onChange = this.onChange.bind(this);
// 	  this.setFontSize = this.setFontSize.bind(this);
// 	  this.setBoolean = this.setBoolean.bind(this);
// 	}
// 	render() {
// 	  return (
// 			<AceEditor
// 			  className='code_area'
// 			  id = "code_area"
// 			  width='100%'
// 			  placeholder={this.state.placeholder}
// 			  mode={this.state.mode}
// 			  theme={this.state.theme}
// 			  name="blah"
// 			  onLoad={this.onLoad}
// 			  //onChange={this.onChange}
// 			  onSelectionChange={this.onSelectionChange}
// 			  onCursorChange={this.onCursorChange}
// 			  onValidate={this.onValidate}
// 			  value={this.state.value}
// 			  fontSize={this.state.fontSize}
// 			  showPrintMargin={this.state.showPrintMargin}
// 			  showGutter={this.state.showGutter}
// 			  highlightActiveLine={this.state.highlightActiveLine}
// 			  setOptions={{
// 				useWorker: false,
// 				enableBasicAutocompletion: this.state.enableBasicAutocompletion,
// 				enableLiveAutocompletion: this.state.enableLiveAutocompletion,
// 				enableSnippets: this.state.enableSnippets,
// 				showLineNumbers: this.state.showLineNumbers,
// 				tabSize: 2
// 			  }}
// 			/>
// 	  );
// 	}
//   }



function CodeArea() {
	return (
	  <>
	  	<div className="code">
			<form id="run_code">
			<div className = "title-bar" id="title-bar">
				<select name="lang" id="lang">
					<option value="py">Python</option>
					<option value="java">Java</option>
					<option value="cpp">C++</option>
					<option value="c">C</option>
				  </select>
				  
				  <select name="theme" id="theme">
					<option value="original" id="theme-original">Orignal</option>
					<option value="dark" id="theme-dark">Dark</option>
					<option value="orange" id="theme-orange">Orange</option>
					<option value="green" id="theme-green">Green</option>
					<option value="blue" id="theme-blue">Blue</option>
				  </select>
				  <a  href="https://github.com/Rony109" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
				  <a  href="https://www.linkedin.com/in/rohan-nirmal-44185519b/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
			      <a  href="mailto:rohannirmal999@gmail.com" target="_blank"><i className="fa fa-envelope" aria-hidden="true"></i></a>
				  <a href="#" className='hint'> <i className="fa fa-info" aria-hidden="true"></i></a>

			</div>

			<AceEditor
			  className="code_area"
			  id = "code_area"
			  width='100%'
			  mode="java"
			  theme="github"
			  name="blah"
			  setOptions={{
				enableBasicAutocompletion: true,
				enableLiveAutocompletion: true,
				showLineNumbers: true,
				tabSize: 2
			  }}
			/>
		
			<div className = "UnderBar" id="UnderBar">
				<button type ="submit" id = "submit_button" >Run Code</button>
			</div>
		</form>
		</div>

	  </>
	);  
}	
export default CodeArea;
  