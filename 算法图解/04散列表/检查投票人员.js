let voted = {}

function check_voted(name) {
    if (voted[name]){
        console.log('checkout')
    }else {
        voted[name] = true
        console.log('ok...')
    }
}
check_voted('hua li')
check_voted('tom')
check_voted('tom')

console.log(voted)