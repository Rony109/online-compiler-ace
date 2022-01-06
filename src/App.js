import "./App.css";
import React, { Component, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/mode-swift";
import "ace-builds/src-noconflict/ext-language_tools"

// global vars
let data;
let code = 'default code'
let output = `your output will be shown here`
let lang;
let input;
// global funs
function load_animation(animation){
  var all = document.getElementsByTagName("*");
    for (var i=0, max=all.length; i < max; i++) {
         all[i].style.cursor = animation;
    }
}

function load_loader(animation){
	let loader = document.getElementById('loader')
	loader.style.visibility = animation;
  }

function CodeArea() {
	let langArray = {
        cpp: "c_cpp",
        java: "java",
        c: "c_cpp",
        cs: "csharp",
        rb: "ruby",
        py: "python",
        kt: "kotlin",
        swift: "swift"
	}

	function update_output(newvalue){
		let op = document.getElementById('output');
		op.value = newvalue;
	}

	function run(e){
		e.preventDefault();
		//alert(data);
	}

	function onChange(newValue){
		data = newValue;
	}
    const [code, setCodeValue] = useState()
	,[selectedValue, setSelectedValue] = useState()
	,[editorLang,setEditorLang] = useState()
	,[output_,setOutput] = useState()
	

	function themeChange(event){
		//console.log('theme :'+event.target.value);
	}

	function handleChange(event){
		//console.log('here '+event.target.value)
		let value = event.target.value;
		if(value === "py"){
				//console.log(value);
				data = `# Python starter code\nprint('Hello World')`;
			}
		else if(value === "java"){
			//console.log(value);
				data = `// Java starter code\npublic class program{\n\tpublic static void main(String args[]){\n\t\tSystem.out.println("Hello World");\n\t}\n}`;
		}
		else if(value === "cpp"){
			//console.log(value);
				data = `//C++ starter code\n#include <iostream>\nint main() {\n\tstd::cout << "Hello World!";\n\treturn 0;\n}`;
		}
		else if(value === "c"){
			//console.log(value);
				data = `//C starter code\n#include <stdio.h>\nint main()\n{\n\t// printf() displays the string inside quotation\n\tprintf("Hello, World!");\n\treturn 0;\n}`;
		}
		else{
				data = "write your code here"
			}
		lang = value;
		setCodeValue(data);
		setEditorLang(langArray[value])
	}

	function run_code(event){
		  event.preventDefault();
		  let parsed_code = code.trim().replaceAll(`"`,`\\"`);
		  //alert(parsed_code)
		  let res_data = "set the dummy ouput";
		  
		  load_animation('wait')
		  load_loader("visible");
		  var axios = require('axios');
		    var data = {"code":parsed_code,"language":lang,"input":input};
		    var config = {
		      method: 'post',
		      url: 'https://my-online-code-compiler.netlify.app/.netlify/functions/compile',
		      // url: 'https://codexweb.netlify.app/.netlify/functions/enforceCode',
		      headers: { 
		        'Content-Type': 'text/plain'
		      },
		      data : data
		    };
		
		    axios(config)
		    .then(function (response) {
		      res_data = response.data;
		      //alert(JSON.stringify(res_data));
		      setOutput(res_data['output']); 
			  output = res_data['output'];
			  update_output(output);
			  //code = code;
			  load_animation('auto');
		      //code_area.style.cursor = "default";
		      load_loader("hidden");
		    })
		    .catch(function (error) {
		      res_data = JSON.stringify(error);
		      setOutput(res_data);
			  output = res_data;
			  update_output(output);
		      //code = code;
			  load_animation('auto');
		      //code_area.style.cursor = "default";
		      load_loader("hidden");
		    });
	}

	return (
	  <>
	  	<div className="code">
			<form id="run_code" onSubmit={run_code}>
			<div className = "title-bar" id="title-bar">
				<select name="lang" id="lang"  onChange={handleChange}>
					<option value="py">Python</option>
					<option value="java">Java</option>
					<option value="cpp">C++</option>
					<option value="c">C</option>
					<option value="kt">Kotlin</option>
					<option value="rb">Ruby</option>
					<option value="swift">Swift</option>
					<option value="cs">C#</option>
				  </select>
				  
				  <select name="theme" id="theme" onChange={themeChange}>
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
			  	className='code_area'
				id = "code_area"
				width='100%'
				placeholder=""
				mode={editorLang}
				theme="monokai"
				name="blah"
				//onLoad={this.onLoad}
				onChange={onChange}
				// onSelectionChange={this.onSelectionChange}
				// onCursorChange={this.onCursorChange}
				// onValidate={this.onValidate}
				value={code}
				fontSize={14}
				showPrintMargin={true}
				showGutter={true}
				highlightActiveLine={true}
				setOptions={{
				useWorker: false,
				enableBasicAutocompletion: true,
				enableLiveAutocompletion: true,
				enableSnippets: true,
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

function Output() {
	function inputChange(event){
		input = event.target.value;
		//console.log('input : '+input)
	}
	return (
	  <>
		<div className = "op" id="op">
			<h1>Output</h1>
			<textarea className = "std-in" id = "input" placeholder="Input goes here..." cols="30" onChange={inputChange} rows="10"></textarea>
			<div className="loader" id = "loader"></div>
			<p className ="tagline">Press Run to Compile your Code.</p>
			<textarea  className ="output"  id = "output" placeholder = {output} value={output}></textarea>
		</div>
	  </>
	);
}

function App() {
  return (
    <>
      <div className = "flexbox_container">
      <CodeArea></CodeArea>
      <Output></Output>
      </div>
    </>
  );
}
export default App;
