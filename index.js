const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if(message.content == '!hi') {
        message.channel.sendMessage('Hi, there.');
    }  
    if(message.content == '!hello') {
        message.channel.sendMessage('Hello, there.');
    }
    if(message.content == '!gey') {
        message.channel.sendMessage('I am not a gey, I am an Artificial Intelligence.');
    }
    if(message.content == '!recruit') {
        message.channel.sendMessage('@everyone TECOM is recruiting a staff contact TECOM Staff for more information.');
    }
    if(message.content == '!credit') {
        message.channel.sendMessage('Underdevelopment by Discord Artificial Intelligence Research or DAIR leading by change1990 (Alias), All rights reserved, © Copyright 2017.');
    }
    if(message.content == '!getdb all') {
        message.channel.sendMessage('No any database has been found at this time.');
    }
    if(message.content == '!version') {
        message.channel.sendMessage('TECOM Artificial Intelligence 0.3.4 Beta. Last update: 10:05 AM, 23 January 2018 (UTC+7)');
    }
    if(message.content == '!tagall') {
        message.channel.sendMessage('@everyone');
    }
    if(message.content == '!help') {
        message.channel.sendMessage('Developer does not put !help function to operational yet, but keep in mind that all command will be all lower cases, Sorry for inconvenience.');
    }
    if(message.content == '!chatbot') {
        message.channel.sendMessage('Here is the chat bot located at TECOM website. https://sites.google.com/view/tecom-usm-1940/tecom-ai');
    }
    if(message.content == '!website') {
        message.channel.sendMessage('Here is the website of TECOM. https://sites.google.com/view/tecom-usm-1940/home');
    }
    if(message.content == '!tos') {
        message.channel.sendMessage('Here is the TECOM Artificial Intelligence Term of Services. https://goo.gl/yytWLj');
    }
    if(message.content == '!taghere') {
        message.channel.sendMessage('@here');
    }
    if(message.content == '!FTW') {
        message.channel.sendMessage('For The Win!');
    }
    if(message.content == '!fshutdown') {
        message.channel.sendMessage('TECOM Artificial Intelligence is shutting down, will be fully disconnected from the server after 5 minutes. (Only work for bot owner)');
    }
    if(message.content == '!restart') {
        message.channel.sendMessage('TECOM Artificial Intelligence can only be restarted manualy by an owner at VSC Integrated Terminal.');
    }
    if(message.content == '!shutdown') {
        message.channel.sendMessage('TECOM Artificial Intelligence can only be shutted down manualy by an owner at VSC Integrated Terminal.');
    }
    if(message.content == '!spam') {
        message.channel.sendMessage('!spam');
    }
    if(message.content == '!@everyone') {
        message.channel.sendMessage('!@everyone');
    }
    if(message.content == '!frestart') {
        message.channel.sendMessage('TECOM Artificial Intelligence is restarting, all protocol will be fully operational in 15 seconds. (Only work for bot owner)');
    }
    if(message.content == '!noob') {
        message.channel.sendMessage('Noob, informal word, meaning is a person who is inexperienced in a particular sphere or activity, especially computing or the use of the Internet.');
    }
    if(message.content == '!bye') {
        message.channel.sendMessage('Goodbye, see you again.');
    }
    if(message.content == '!idiot') {
        message.channel.sendMessage('Indeed, I am an idiot, I am just made of 100 lines of the code.');
    }
    if(message.content == '!oof') {
        message.channel.sendMessage('Oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooof.');
    }
  
});

bot.login('NDAxNjc0MTkzOTg2NjUwMTEy.DTtuaw.Wf9PYl3DPOolyeyqGcJB-o0t0Js');

 