


const a = 1;

const b = 10;

const flag =true;

const c = 1;

if(a === b) {
    console.log("a is equals to b");
} else {
    console.log("a is not equals to b");
}

// nested condition

if(a === c) {
    console.log("a is equals to c")
    if (a === b) {
        console.log("a is equals to b");
    } else {
        console.log("a is equals to c but no b");
    }
}

// ladder condition

if(a === b) {
    console.log("a is equals to b");
} else if(a === c) {
    console.log("a is equals to c");
}