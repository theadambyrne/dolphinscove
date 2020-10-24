const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
 
imagemin(['images/*.jpg'], 'build/images', {use: [imageminJpegtran()]}).then(() => {
    console.log('Images optimized');
});
