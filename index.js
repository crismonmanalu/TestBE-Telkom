#! /usr/bin/env node
const program = require('commander')

program
  .version('1.0.0')
  .name('make-thumbs')
  .description('An image resizer to make thumbnails')
  .option('-s,--source [folder]', 'Source images directory', 'images')
  .option(
    '-d,--destination [folder]',
    'Directory to be created for thumbnails',
    'thumbnails'
  )
  .parse(process.argv)
