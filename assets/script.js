// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Jesus Beltran" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`
// Gingerbread code

// Event listener for clicks on the "+" button for Gingerbread cookies


document.getElementById('add-gb').addEventListener('click', function() {
    gb = gb + 1
    document.getElementById('qty-gb').innerHTML = gb
    document.getElementById('qty-total').innerHTML = gb + cc + sugar
   
    
})

document.getElementById('minus-gb').addEventListener('click', function() {
    if(gb > 0){
        gb = gb - 1
        document.getElementById('qty-gb').innerHTML = gb
        document.getElementById('qty-total').innerHTML = gb + cc + sugar
        
    }
})

// cc code

document.getElementById('add-cc').addEventListener('click', function() {
    cc = cc + 1
    document.getElementById('qty-cc').innerHTML = cc
    document.getElementById('qty-total').innerHTML = gb + cc + sugar
    
})

document.getElementById('minus-cc').addEventListener('click', function() {
    
    if(cc > 0){
        cc = cc - 1
        document.getElementById('qty-cc').innerHTML = cc
        document.getElementById('qty-total').innerHTML = gb + cc + sugar
        
    }
})

// sugar code

document.getElementById('add-sugar').addEventListener('click', function() {
    
    sugar = sugar + 1
    document.getElementById('qty-sugar').innerHTML = sugar
    document.getElementById('qty-total').innerHTML = gb + cc + sugar

})

document.getElementById('minus-sugar').addEventListener('click', function() {
    if(sugar > 0){
        sugar = sugar - 1
        document.getElementById('qty-sugar').innerHTML = sugar
        document.getElementById('qty-total').innerHTML = gb + cc + sugar
    }
})




