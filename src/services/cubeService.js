const cubes = require('../cubes.json')
const fs = require('fs/promises')
const path = require('path')

exports.save = (cube) => {
    cubes.push(cube)
    let textData =  JSON.stringify(cubes, '', 4)

     return fs.writeFile(path.resolve('src', 'cubes.json'), textData , {encoding: 'utf-8'})
}

exports.getOne = (id)=> cubes[id]