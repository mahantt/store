function deepEqual(arg1,arg2){
    if(typeof arg1=== Boolean && typeof arg2===Boolean){
        if(arg1!==arg2){
            return false
        }
    }return true
    if ((typeof arg1 === 'number' && typeof arg2 === 'object') ||
        (typeof arg1 === 'object' && typeof arg2 === 'number')){
    return false;
    }
    for (let item in arg1) {
		if (arg1.hasOwnProperty(item) !== arg2.hasOwnProperty(item)) return false;
		switch (typeof (arg1[item])) {
			case 'object':
				if (!deepEqual(arg1[item],arg2[item])) return false;
				break;
			default:
				if (arg1[item] !== arg2[item]) return false;
            }
        }return true
}
console.log(deepEqual({a: 1, b: 2}, {b:2, a: 1}));
console.log(deepEqual(1, [1]));



// 2\\\\\\\\

function jsonequal(arg1,arg2){
    if(JSON.stringify(arg1)!==JSON.stringify(arg2)){
        return false
    }return true
}
// console.log(jsonequal([1, [2, 3]], [1, [2, 3]]));


module.exports={
    jsonequal,deepEqual
}