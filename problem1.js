//https://practice.geeksforgeeks.org/problems/reverse-an-array/0#

let input = ''
process.stdin.on('data', c => input += c)
process.stdin.on('end', () => {
 const {EOL} = require('os')
 const lines = input.split(EOL) 
 
 
 t = lines.shift()
 
 while(t - ){
 n = lines.shift()
 arr = lines.shift().split(" ").reverse()
 
 console.log(arr.join(' ').trim())
 }
})
