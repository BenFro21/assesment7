// 1) Sum Zero
//runtime= The function iterates through the nums array once, performing constant-time operations on each iteration. Therefore, the runtime complexity of this function is O(n), where n is the length of the input array nums.
//spaceComplexity= The function uses a Set called seen to keep track of the numbers encountered so far. In the worst case, if none of the numbers sum to zero, the Set will store all unique numbers from the input array nums. Therefore, the space complexity of this function is O(n), where n is the length of the input array nums.

let addToZero = (nums) => {
    const seen = new Set();
    for(let num of nums) {
        if(seen.has(-num)){
            return true
        }
        seen.add(num)
    }
    return false
}
// console.log(addToZero([]))
// console.log(addToZero([1]))
// console.log(addToZero([1,2,3]))
// console.log(addToZero([1,2,3,-2]))


//2) Unique Characters
//runtime= The function iterates through each character of the word string once, performing constant-time operations on each iteration. Therefore, the runtime complexity of this function is O(n), where n is the length of the input string word.
//spaceComplexity= The function uses a Set called charSet to keep track of the unique characters encountered so far. In the worst case, if all characters in the input string word are unique, the Set will store all the characters. Therefore, the space complexity of this function is O(k), where k is the number of unique characters in the input string word. In the worst case, when all characters are unique, k can be equal to n, resulting in a space complexity of O(n).

let hasUniqueChars = (word) => {
    const charSet = new Set();
    for(let char of word) {
        if(charSet.has(char)) {
            return false
        }
        charSet.add(char)
    }
    return true
}
// console.log(hasUniqueChars("Monday"))
// console.log(hasUniqueChars("Moonday"))

// 3) Pangram Sentence
//runtime= The function iterates through each character of the sentence string once. Within each iteration, it checks if the character is a letter of the English alphabet, which is done in constant time. Therefore, the runtime complexity of this function is O(n), where n is the length of the input string sentence.
//spaceComplexity= The function uses a Set called charSet to store the unique letters encountered in the sentence. In the worst case, if the sentence is a pangram and contains all the letters of the alphabet, the charSet will store all the letters, resulting in a space complexity of O(26), which simplifies to O(1). Regardless of the length of the input sentence, the space used by the charSet remains constant. Therefore, the space complexity of this function is O(1).

let isPangram = (sentence) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const charSet = new Set()

    for(let char of sentence.toLowerCase()) {
        if(alphabet.includes(char)){
            charSet.add(char)
        }
    }
    return charSet.size === alphabet.length
} 
// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// console.log(isPangram("I like cats, but not mice"))


// 4) Longest Word
//runtime= The function iterates through each word in the words list once and performs constant-time operations to compare the length of each word. Therefore, the runtime complexity of this function is O(n), where n is the number of words in the input list words.
//spaceComplexity=The function only uses a few variables to store the longest length found so far, which requires constant space regardless of the size of the input list. Therefore, the space complexity of this function is O(1), as it doesn't depend on the size of the input.

let findLongestWord = (words) => {
    let longestLength = 0;

    for(let word of words) {
        if(word.length > longestLength){
            longestLength = word.length
        }
    }
    return longestLength
}

console.log(findLongestWord(["hi", "hello"]))
console.log(findLongestWord(["ben", "benjamin"]))
