# ![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/SEPTA_text.svg/105px-SEPTA_text.svg.png) Telegram Bot

A simple Telegram bot that returns up-to-dated **Regional Rail** information

[![GitHub release](https://img.shields.io/github/release/f4r4z/SEPTA-Telegram-Bot.svg)](https://github.com/f4r4z/SEPTA-Telegram-Bot/releases)

> This Telegram bot helps SEPTA users to keep track of delays, train's source and destination, and etc.

## How to Use It?

To use the SEPTA Telegram bot, download [Telegram](https://telegram.org/) on your preferred device.

The bot can be accessed using [this link](http://t.me/septa_bot) or by searching @SEPTA_bot in the app.

Train data will be updated every time the command ```/trainno``` is used. Please do not update the data more than once every few minutes.

As it is asked by the bot, enter the desired train number. All train numbers can be found on SEPTA's official app or on the [shedules PDF files](http://www.septa.org/schedules/rail/).

Note that the bot only recognizes *current* trains running.

### Why use the bot when we can use the official SEPTA app?

Personally, after taking the SEPTA trains every day, I know what my train number is. 
Even if I do not know the train's number, it is easier for me to search through the numbers than entering location and destination every time I open the app.
Since I use Telegram as my messenger app, the bot is in reach and convenient.

## Real Example

user: 
```/trainno```

bot: 
```Train data is updated. Enter train number:```

user: 
```561```

bot: 
```  
Train has a delay of 10 minute(s)
Source: Doylestown
Destination: Malvern
Service: LOCAL
Next Stop: Overbrook
Line: Paoli/Thorndale
Train's possible track:_
Exact location in Google Maps:
[Google Maps URL]
```
## Built With
* [TeleBot](https://github.com/mullwar/telebot)- The easy way to write Telegram bots in Node.js
* [IsSeptaFcked API](https://github.com/dmuth/IsSeptaFcked)- A website that determines if SEPTA is f*cked or not.

## Acknowledgements

Thanks to [dmuth](https://github.com/dmuth) for the Regional Rail SEPTA API and inspiration.

And of course, thanks to SEPTA for their volatile schedules and trains that inspired me initially to make the bot!
