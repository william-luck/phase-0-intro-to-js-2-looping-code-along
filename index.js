// let squaf = [
//     "Biblo",
//     "Tot",
//     'diegs',
//     'bert',
//     'ali'
//   ]

const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(arr, eventName) {
    const newArr = []  
    for (let member of arr) { 
        newArr.push(`Thank you, ${member}, for the wonderful ${eventName} gift!`);
      }
    return newArr;
  }

  // while loop to count down to zero, provided an integer. 

function countDown(startingNum) {
    while (startingNum > 0) {
        console.log(startingNum);
        startingNum--;
    }
    console.log(startingNum);
}

countDown(10);









