// Iteration 1: Names and Input


const hacker1 = "Carles"
const hacker2 = "Pau"
const hacker1Cap = hacker1.toUpperCase()
let hacker1space = ''
let hacker2back = ''


// Iteration 2: Conditionals



if ((hacker1.length) > (hacker2.length)){
    console.log(`${hacker1} has the longest name, it has ${hacker1.length} characters.`)
}
    else if ((hacker1.length) < (hacker2.length)){
        console.log(`It seems that ${hacker2} has the longest name, it has ${hacker2.length} characters.`)
    }
    else {
        console.log("Wow, you both have equally long names, XX characters!")
    }

// Iteration 3: Loops

for (let i = 0; i < (hacker1Cap.length); i++){    
    const letter = hacker1Cap[i]
    hacker1space += (letter + " ")    
}

console.log(hacker1space)

for (let i = hacker2.length -1; i >= 0; i--){    
    const letter = hacker2[i]
    hacker2back += letter  
}

console.log(hacker2back)

for (let i=0; i < hacker1.length; i++){
    if (hacker1[i] < hacker2[i]){
        console.log(`${hacker1} goes first`)
        return; 
    } else if(hacker1[i] > hacker2[i]){
        console.log(`${hacker2} goes first`)
        return;
    } 
}

if (hacker1.length === hacker2.length){
    console.log(`What?! You both have the same name?`)
} else {
    console.log(`${hacker1} goes first`)
}



