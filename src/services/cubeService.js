const Cube = require('../models/Cube')
const path = require('path')
const Accessory = require('../models/Accessory')

exports.save = (cube) => {
 return  Cube.create(cube)
 
}


exports.getOne = (id)=> Cube.findById(id).populate('accessories')

exports.getAll =  (search = '', from, to) => {
   
    from = Number(from) || 0
    to = Number(to) || 6
    // const result = cubes
    // .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    // .filter(x => x.difficultyLevel>=from && x.difficultyLevel<=to)

 
      let cubes =  Cube.find({name: {$regex: new RegExp(search, 'i')}})
    .where('difficultyLevel').lte(to).gte(from)
    
    return cubes
}
exports.edit = (cubeId, cubeData)=> Cube.findByIdAndUpdate(cubeId, cubeData)

exports.delete = (cubeId) => Cube.findByIdAndDelete(cubeId)

exports.attach = async (accessoryId, cubId) => {

    const cube = await Cube.findById(cubId)
    const accessory = await Accessory.findById(accessoryId)
  
        accessory.cubes.push(cube)
        cube.accessories.push(accessory)

    await cube.save()
    await accessory.save()

    return cube
}