const { parser } = require('html-metadata-parser')

parser('https://www.youtube.com/watch?v=nKPbfIU442g').then((result) => {
	console.log(result)
}).catch((err) => {
	console.log(err)
})