function writeCards(names, event) {
    const friends = []
        for(let i = 0; i < names.length; i++) {
            friends.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
        }
        return friends
    }


function countDown() {
    let number = 10;
    while (number >= 0) {
        console.log(number--)
    }
}