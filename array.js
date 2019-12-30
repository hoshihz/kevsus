const { performance } = require('perf_hooks')
const fs = require('fs')
const n = 6

const αβ = 'abcdefghijklmnopqrstuvwxyz'
const arr = []

for (let i = 0; i < 26 ** n; i++) {
  let ign = ''
  let _i = i
  while (_i > 25) {
    ign = αβ[_i % 26] + ign
    _i = Math.floor(_i / 26)
  }
  ign = αβ[_i] + ign
  ign = ign.padStart(n, 'a')
  arr.push(ign)
}

console.log('done:', performance.now() + 'ms')

const obj = JSON.parse(fs.readFileSync('./array.json'))
const file = JSON.parse(fs.readFileSync('./file.json'))

console.log('read:', performance.now() + 'ms')

if (!obj[n] && !file[n]) {
  obj[n] = arr
  file[n] = []
}

fs.writeFileSync('./array.json', JSON.stringify(obj, null, 2))
fs.writeFileSync('./file.json', JSON.stringify(file, null, 2))