const argv = require('yargs')
                    .options('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    })
                    .options('h', {
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'Es el numero hasta donde va a multiplicar'
                    })
                    .options('l', {
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: true,
                        default: false,
                        describe: 'Muestra la tabla en consola'
                    })
                    .check( (argv, options) => {
                        if (isNaN( argv.b ) ) {
                            throw 'La base tiene que ser un número'
                        }
                        return true;
                    })
                    .check( (argv, options) => {
                        if (isNaN( argv.h ) ) {
                            throw 'El argumento tiene que ser un número'
                        }
                        return true;
                    })
                    .argv;

module.exports = argv;