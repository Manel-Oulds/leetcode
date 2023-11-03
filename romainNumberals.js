/**
 
 # Use an object to save the symbols as a key and the integer as a value.
 # Initialize the counter = 0
 # Iterate through the input and add the value of each key to the counter .
 # if input[j] < input[j+1]
        add input[j+1] - input [j] to counter 
        add 2 to j;
    else
        add input[j] to counter
        add 1 to j;

 # return counter;
 # time complexity O(n) space complexity O(1).


 */

 var romanToInt = function(s) {
    let counter = 0;
    let symbolValue = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000,

    };
    let j =0;
    while (j < s.length-1){ 
        if (symbolValue[s[j]] < symbolValue[s[j+1]]){  
            counter+= symbolValue[s[j+1]] - symbolValue[s[j]]; 
            j+=2; 
        } 
        else{
            counter+= symbolValue[s[j]];   
            j++;    
        }
    }
    
    
    if(j < s.length){ 
        counter+= symbolValue[s[j]]; 
    }

    return counter;
};