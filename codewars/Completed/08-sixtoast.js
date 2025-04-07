// BASIC: Making Six Toast.
//You are going to make toast fast, you think that you should make multiple pieces of toasts and once. So, you try to make 6 pieces of toast.


function sixToast(num) {
    let dif = Math.abs(num-6);
    console.log(`${num} --> ${dif}` );
    return(dif);
}

sixToast(6);
sixToast(3);

