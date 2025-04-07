function isValidWalk(walk) {
    let goodW = false;
    let north = 0;
    let south = 0;
    let west = 0;
    let east =0;
    let lenW = walk.length;
        if (lenW === 10) 
    {
        for (i=0; i < lenW; i++) {
            if (walk[i] === 'n') {
                north++;
            }
            if (walk[i] === 's') {
                south++;
            }
            if (walk[i] === 'w') {
                west++;
            }
            if (walk[i] === 'e') {
                east++;
            }
        }         
        if ((north - south) === 0 && (west - east) === 0) {
            goodW = true;
        }
    }
    return(goodW);
}

console.log('should return ' + isValidWalk(['n','s','n','s','n','s','n','s','n','s']));

console.log('should return ' + isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
console.log('should return ' + isValidWalk(['w']));

console.log('should return ' + isValidWalk(['n','n','n','s','n','s','n','s','n','s']));

