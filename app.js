//modules
const http = require('http');
const TeleBot = require('telebot');
require('dotenv').config();

//bot API Key
const bot = new TeleBot(process.env.API_KEY);


//train data 
//includes random data to prevent errors during execution
var trainData = {data: ['1' , '2']};

//gets data from isseptafucked.com
var options = {
	host: 'www.isseptafucked.com',
	port: 80,
	path: '/api/rr/raw_data',
	method: 'GET'
}


//gets the JSON
function getJSON(options, callback) {

	//requests http
	http.request(options, function(res){
		var body = '';

		res.on('data', function(chunk){

			//on data adds data to body
			body += chunk;
		});

		//on end sends result to callback function
		res.on('end', function(){
			var result = JSON.parse(body);
			callback(null, result);
		});

		//on error returns the error
		res.on('error', callback);
	})

	//ends the execution
	.on('error', callback)
	.end();

}

//sets the data to trainData
function setData(result, cb) {
	trainData = result;
	cb();
}

//logs that the data is updated
function logData() {
	console.log("updated");
}


//train number
bot.on('/trainno', msg => {

	getJSON(options, function(err, result, cb){
		if(err) {
			console.log(err);
		} else {
			setData(result, logData);
		}
	});
		
	return bot.sendMessage(msg.from.id, "Train data is updated. Enter train number:");
		
}); 


//returns train data
bot.on('text', msg => {

		for (var i = 0; i < trainData.data.length; i++) {
			var number = trainData.data[i].trainno;
	   		if(number == msg.text) {
	   			var chosen = trainData.data[i];
				return bot.sendMessage(msg.from.id, 
					"Source: " + chosen.SOURCE +	
					"\nDestination: " + chosen.dest +
					"\nService: " + chosen.service +
					"\nNext Stop: " + chosen.nextstop +
					"\nLine: " + chosen.line +
					"\nTrain has a delay of " + chosen.late + " minute(s)" +
					"\nTrain's possible track: " + chosen.TRACK + "_" + chosen.TRACK_CHANGE
				);
	   		}
		}
	
});

//starts bot
bot.start();

