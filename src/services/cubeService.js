const Cube = require('../models/Cube')
const path = require('path')

exports.save = (cube) => {
 return  Cube.create(cube)
}

exports.getOne = (id)=> Cube.findById(id)

exports.getAll = (search = '', from, to) => {
   
    // from = Number(from) || 0
    // to = Number(to) || 6
    // const result = cubes
    // .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    // .filter(x => x.difficultyLevel>=from && x.difficultyLevel<=to)
 
      let cubes =Cube.find()
      console.log(cubes);
    
    return cubes
}