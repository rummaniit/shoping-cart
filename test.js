function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true
}
let isp = isPrime(9)
console.log(isp)