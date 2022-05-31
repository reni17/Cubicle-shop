const cubes = require('../cubes.json')
const fs = require('fs/promises')
const path = require('path')

exports.save = (cube) => {
    cubes.push(cube)
    let textData =  JSON.stringify(cubes, '', 4)

     return fs.writeFile(path.resolve('src', 'cubes.json'), textData , {encoding: 'utf-8'})
}

exports.getOne = (id)=> cubes.find(x => x.id == id)

exports.getAll = (search = '', from, to) => {
    
    from = Number(from) || 0
    to = Number(to) || 6
    const result = cubes
    .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    .filter(x => x.difficultyLevel>=from && x.difficultyLevel<=to)
 
       
    
    return result
}