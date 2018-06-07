'use strict';

var app = require('electron').app;
const {BrowserWindow} = require('electron')

var mainWindow = null;

app.on('ready', function() {
    let win = new BrowserWindow({
        height: 600,
        width: 800,
        frame: true
    });

    win.on('closed', () => {
        win = null
    })

    win.loadURL('file://' + __dirname + '/app/index.html');

    win.setMenu(null);
});
