/***
 * LOGGING
 *
 * Application wide logging. Store all logs on files inside "../logs" folder.
 * Additionally azure cloud based table logging also ready.
 * require winston v2.4.1
 */

'use strict';
var winston = require('winston');
var fileName = __dirname + "/../logs/myLogs.log";
// Set Default logging level
var defaultLevel = 'info';


/**
 * transport supporting Console, File and AzureLogger to logger
 * Remove any transports item if not required
 */
var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({
            filename: fileName,
            maxsize: 1000 * 1000 * 10,
            maxFiles: 5,
            level: defaultLevel
        })
    ]
});

module.exports = logger;