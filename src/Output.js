import './App.css'
function Output() {
	return (
	  <>
		<div className = "op" id="op">
			<h1>Output</h1>
			<textarea className = "std-in" id = "input" placeholder="Input goes here..." cols="30" rows="10"></textarea>
			<div className="loader" id = "loader"></div>
			<p className ="tagline">Press Run to Compile your Code.</p>
			<textarea  className ="output"  id = "output" value = "Your Output will be shown here"></textarea>
		</div>
	  </>
	);
  }
  
  export default Output;
  