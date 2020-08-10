const fs = require('fs')

// console.log(fs)

fs.appendFile('movies.txt', `\n${process.argv[2]}, \n${process.argv[3]}, \n${process.argv[4]}`, (err) => {
    if (err) { console.log(err) }
    console.log(`Added ${process.argv[2]}, ${process.argv[3]}, ${process.argv[4]}`)
})