
const uniqid = require('uniqid');
const db = require('../db.json');
const cubes = [{
    id: 'qksdjsfn1213',
    name:'VladiCube',
    description: 'Very cool Cube',
    imageUrl: 'https://www.emegashop.bg/images/products/%D0%BC%D0%B0%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8-%D0%BA%D1%83%D0%B1-%D1%82%D0%B8%D0%BF-%D1%80%D1%83%D0%B1%D0%B8%D0%BA-400-0-400.jpg',
    difficultyLevel: 3,
},
{
    id: 'qksdjsfn16768',
    name:'SofiiCube',
    description: 'Very nice Cube',
    imageUrl:'https://logicbg.com/wp-content/uploads/2022/02/rubik-kub-Mirror-Cube-3h3-QiYi-Speed-Cube.jpg',
    difficultyLevel: 7,
},
{
    id: '1n73sh8holhz66elc',
    name: 'Mirror Cube',
    description: 'A cool mirror cube',
    imageUrl: 'https://m.media-amazon.com/images/I/71TrvUl50OL.jpg',
    difficultyLevel: 4
},
{
    id: '2n73sh8holaz66elc',
    name: 'Rubic Classic',
    description: 'Evergreen',
    imageUrl: 'https://www.hpcwire.com/wp-content/uploads/2018/07/Rubiks_Cube_shutterstock_271810067-675x380.jpg',
    difficultyLevel: 3
}
];

exports.getAll = (search,from,to) => {
    let result = cubes.slice();
    if(search){
       result = result.filter(cub => cub.name.toLowerCase().includes(search.toLowerCase()))

    }
    if(from){
       result = result.filter(cub => cub.difficultyLevel  >= Number(from))

    }
    if(to){
       result = result.filter(cub => cub.difficultyLevel  <= Number(to) )

    }
return result;
}
exports.getOne = (cubeId)=>cubes.find(x=>x.id === cubeId)


exports.create = (cubeData) => {

    const newCube = {
        id:uniqid(),
        ...cubeData}
    cubes.push(newCube)

    return newCube
};