
/*THE LARGEST SWAP
Write a function that takes a two digit number and detemines if the largest
of two digits  swaps.
To illustrate                   clue
largestSwap(27)->false          input =27
largestSwap(43) -> true         swapped = 72
Expected result:                27> 72 false
largestSwap(14) -> false
largestSwap(53) -> true         clue
largestSwap(99) -> true         input = 43
                                swapped =34
                                43>34  true
*/

function largestSwap(n){
    var first_digit = Number.parseInt(n/10)
    var second_digit = n% 10;
    var swappedDigit = second_digit*10 + first_digit
    if(swappedDigit<=n){
        return true
    }
   return false;
}

console.log(largestSwap(14))