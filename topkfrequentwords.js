var topKFrequent = function(words, k) {
    let frequencies = {}

    for (let i = 0; i < words.length; i++) {
        if (frequencies[words[i]] === undefined) {
            frequencies[words[i]] = 1
        } else {
            frequencies[words[i]]++
        }
    }

    let keysSorted = Object.keys(frequencies).sort((a,b) => {
        //if the two words share the same frequency, then sort them alphabetically
        if (frequencies[a] === frequencies[b]) {
            console.log(a, b)
            return a > b ? 1 : -1
        }
        //else return them by frequencies from greatest to least
        return frequencies[b] - frequencies[a]
    })

    return keysSorted.slice(0, k)
}

let input = ["i", "love", "leetcode", "i", "love", "coding"]
let k = 2

console.log(topKFrequent(input, k))
