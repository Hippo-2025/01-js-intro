// Volume of a Cuboid
/*
function getVolumeOfCuboid(length, width, height) {
    let vol = length * width * height;
    return(vol);
}

console.log(getVolumeOfCuboid(1,2,3));
console.log(getVolumeOfCuboid(5,5,2));
console.log(getVolumeOfCuboid(10,10,10));
*/

class Kata {
    static getVolumeOfCuboid(length, width, height) {
      this.vol = length * width * height; 
      return vol
     }
  }

  const stac = new Kata(1,2,3);

  console.log(Kata.vol);
