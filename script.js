let n = 6

const fetch = require('node-fetch')
const fs = require('fs')

const url = 'https://api.roblox.com/users/get-by-username?username=' 
let αβ = 'abcdefghijklmnopqrstuvwxyz'
let arr = []
let arr2 = []

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

(async () => {
  for (let i of arr) {
    try {
      const res = await fetch(url+i)
      const json = await res.json()
      if (json.success === false) {
        arr2.push(i)
        fs.writeFileSync('file.json', JSON.stringify(arr2, null, 2))
        console.log(arr2)
      }
      console.log(i)
    } catch (e) {
      console.error(e)
      return
    }
  }
})()
