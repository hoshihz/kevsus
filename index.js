const fetch = require('node-fetch')
const fs = require('fs')
const n = 5

const url = 'https://api.roblox.com/users/get-by-username?username='
const array = JSON.parse(fs.readFileSync('array.json'))
const file = JSON.parse(fs.readFileSync('file.json'))
const arr = array[n]
const valid = file[n];

(async () => {
  for (let i of arr) {
    try {
      const res = await fetch(url+i)
      const json = await res.json()
      if (json.success === false) {
        valid.push(i)
        fs.writeFileSync('file.json', JSON.stringify(file, null, 2))
        console.log([i])
      }
      fs.writeFileSync('array.json', JSON.stringify(array, null, 2))
      console.log(arr.shift())
    } catch (e) {
      console.error(e)
      return
    }
  }
})()
