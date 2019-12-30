const fetch = require('node-fetch')
const fs = require('fs')

const url = 'https://api.roblox.com/users/get-by-username?username='
const array = JSON.parse(fs.readFileSync('array.json'))
const valid = file.four
const file = JSON.parse(fs.readFileSync('file.json'))
const arr = array.four

(async () => {
  for (let i of arr) {
    try {
      const res = await fetch(url+i)
      const json = await res.json()
      if (json.success === false) {
        valid.push(i)
        fs.writeFileSync('file.json', JSON.stringify(valid, null, 2))
        console.log(valid)
      }
      console.log(arr.shift())
    } catch (e) {
      console.error(e)
      return
    }
  }
})()
