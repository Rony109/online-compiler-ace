var axios = require('axios');
let res_data;
exports.handler = function (event, context, callback) {
	let paresdBody = JSON.parse(event.body);
	var data = '{\r\n"code":"'+paresdBody.code+'",\r\n"language": "'+paresdBody.language+'",\r\n"input": "'+paresdBody.input+'"\r\n}';

	var config = {
		method: 'post',
		url: 'https://codexweb.netlify.app/.netlify/functions/enforceCode',
		headers: { 
			'Content-Type': 'text/plain'
		},
		data : data
	};

	axios(config)
	.then(function (response) {
		res_data = JSON.stringify(response.data);
		callback(null, {
			statusCode: 200,
			body: res_data,
		});
	})
	.catch(function (error) {
		res_data = JSON.stringify(error);
		callback(null, {
			statusCode: 200,
			body: res_data,
		});
	});
};