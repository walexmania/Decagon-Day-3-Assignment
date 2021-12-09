// Given a string of characters as input, write a function that returns it with the characters reversed.e.g "hello world" => "dlrow olleh"

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}




// A palindrome is a word or phrase that reads the same backward as forward.Write a function that checks for this.the function should return true if a word is a palindrome and false otherwise.e.g "Racecar" => true, "sit ad est love" => false


function palindrome(str) {
    // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
    var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;

    var lowRegStr = str.toLowerCase().replace(re, '');

    return reverseStr === lowRegStr;
}


// Given a string of characters, write a function that returns the character that appears the most often.e, g "Hello World!" => "l"

var getMax = function (str) {
    var max = 0,
        maxChar = '';
    str.split('').forEach(function (char) {
        if (str.split(char).length > max) {
            max = str.split(char).length;
            maxChar = char;
        }
    });
    return maxChar;
};

//write a function that checks the number of consonants and vowels in a given string.if number of consonants is greater than the number of vowels return "consonants win", if number of vowels is greater than the number of consonants return "vowels win", if the number of consonants and vowels are the same, return "draw"

function vowels_consonant(str) {
    var known_vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var vowels = 0;
    var consonants = 0;
    for (var i = 0; i < str.length; i++) {
        if (known_vowels.includes(str[i])) {
            vowels += 1;
        } else {
            consonants += 1;
        }
    }
    if (vowels > consonants) {
        return 'vowels win';
    } else if (consonants > vowels) {
        return 'consonants win';
    } else {
        return 'draw';
    }
}

// Implement the function encode(plainText) which returns an encoded message.It receives a plainText string parameter, for example aaaabcccaaa.You must encode it by counting each consecutive sequence of a letter.e.g.in aaaabcccaaa, there are: 4 times the letter a then 1 b then 3 c then 3 a Therefore you must return the string 4a1b3c3a.Constraints : plainText is made of lowercase letters: a - z plainText is never null and has a maximum length of 15000 characters EXAMPLES: PlainText aabaa EncodedText 2a1b2a PlainText aaaabcccaaa EncodedText 4a1b3c3a
