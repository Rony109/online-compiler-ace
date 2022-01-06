import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// let lang_d = document.getElementById('lang');
// let code_area = document.getElementById('code_area');
// code_area.onchange = () => {
//   console.log(code_area.value)
// }


// function load_animation(animation){
//   var all = document.getElementsByTagName("*");
//     for (var i=0, max=all.length; i < max; i++) {
//          all[i].style.cursor = animation;
//     }
// }

// function change(){
// 	if(lang_d.value === "py"){
// 		console.log(lang_d.value);
// 		code_area.placeholder = `# Python starter code
// print('Hello World')`;
// 	}
//   else if(lang_d.value === "java"){
//     console.log(lang_d.value);
// 		code_area.value = `
//       // Java starter code
//       public class program{
//         public static void main(String args[]){
//           System.out.println("Hello World");
//         }
//       }
//     `;
//   }
//   else if(lang_d.value === "cpp"){
//     console.log(lang_d.value);
// 		code_area.value = `
//     //C++ starter code
//     #include <iostream>
//     int main() {
//       std::cout << "Hello World!";
//       return 0;
//     }
//     `;
//   }
//   else if(lang_d.value === "c"){
//     console.log(lang_d.value);
// 		code_area.value = `
//     //C starter code
//     #include <stdio.h>
//     int main()
//     {
//         // printf() displays the string inside quotation
//         printf("Hello, World!");
//         return 0;
//     }
//     `;
//   }
//   else{

//     }
// 	}

// lang_d.onchange = change;

let theme = document.getElementById('theme');
let title_bar = document.getElementById("title-bar");
let UnderBar = document.getElementById("UnderBar");
let op = document.getElementById("op");
let body = document.getElementById("body");
let color,prcolor,bgcolor;

function theme_change(){
  if(theme.value === 'dark'){
    console.log(theme.value);
    color = 'var(--theme-dark)'
    prcolor = 'var(--white)'
    bgcolor = 'var(--black)'
    console.log("theme changed to dark")
  }
  else{
      prcolor = 'black';
      bgcolor = 'var(--white-transparent)';
      if(theme.value === 'red'){
        console.log(theme.value);
        color = 'var(--theme-red)'
        console.log("theme changed to red")
      }
      else if(theme.value === 'blue'){
        console.log(theme.value);
        color = 'var(--theme-blue)'
        console.log("theme changed to blue")
      }
      else if(theme.value === 'green'){
        console.log(theme.value);
        color = 'var(--theme-green)'
        console.log("theme changed to green")
      }
      else if(theme.value === 'orange'){
        console.log(theme.value);
        color = 'var(--theme-orange)'
        console.log("theme changed to orange")
      }
      else if(theme.value === 'original'){
        console.log(theme.value);
        color = 'var(--primary)'
        console.log("theme changed to original")
      }
      else{

      }
  }
    title_bar.style.backgroundColor = color;
    title_bar.style.color = prcolor;
    UnderBar.style.backgroundColor = color;
    op.style.backgroundColor = color;
    op.style.color = prcolor;
    body.style.backgroundColor = bgcolor;
}
theme.onchange = theme_change;

let hint = document.querySelector('.hint');
let hint2 = document.querySelector('.hint2');

hint.onmouseover = () => {
  console.log('onmouse over')
  hint2.style.display = 'block';
  hint2.style.zIndex = '1';
}
// // Sending our code to our netlify function
// let run_code_form = document.getElementById("run_code");
// let output = document.getElementById("output");

// function run_code(event){
//   event.preventDefault();
//   let code_area =  document.getElementsByTagName("AceEditor");
//   let loader = document.getElementById("loader");
//   let body = document.getElementById("body");
//   let code = code_area.value.trim();
//   let parsed_code = code.replaceAll(`"`,`\\"`);
//   //alert(parsed_code)
//   let lang = lang_d.value.trim();
//   let input = document.getElementById('input').value.trim();
//   let res_data = "set the dummy ouput";
  
//   load_animation('wait')
//   loader.style.visibility = "visible";
//   var axios = require('axios');
//     var data = {"code":parsed_code,"language":lang,"input":input};
//     var config = {
//       method: 'post',
//       url: 'https://my-online-compiler.netlify.app/.netlify/functions/compile',
//       // url: 'https://codexweb.netlify.app/.netlify/functions/enforceCode',
//       headers: { 
//         'Content-Type': 'text/plain'
//       },
//       data : data
//     };

//     axios(config)
//     .then(function (response) {
//       res_data = response.data;
//       //alert(JSON.stringify(res_data));
//       output.value = res_data['output']; 
//       code_area.value = code;
//       load_animation('auto');
//       code_area.style.cursor = "default";
//       loader.style.visibility = "hidden";
//     })
//     .catch(function (error) {
//       res_data = JSON.stringify(error);
//       output.value = res_data;
//       code_area.value = code;
//       load_animation('auto');
//       code_area.style.cursor = "default";
//       loader.style.visibility = "hidden";
//     });
    
// }
// run_code_form.addEventListener("submit",run_code);