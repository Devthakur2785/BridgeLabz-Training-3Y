
console.log("start");

//callback,promise,async await

// function getUser() {
//     setTimeout(() => {
//         console.log("User data ....");
//     }, 2000);
// }


// function getUserBankDetail() {
//     setTimeout(() => {
//         console.log("User bank details ....");
//     }, 1000);
// }
// getUser();
// getUserBankDetail();


//callback

// function getUser(callback) {
//     setTimeout(() => {
//         console.log("User data ....");
//         callback()
//     }, 3000);
// }


// function getUserBankDetail(callback) {
//     setTimeout(() => {
//         console.log("User bank details ....");
//     }, 1000);
//     callback()
// }

// function getUserInsurance() {
//     setTimeout(() => {
//         console.log("User Insurance ....")
//     }, 2000);
// }

// //callback hell
// getUser(() =>
//     getUserBankDetail(() =>
//         getUserInsurance()
//     )
// );

//promise

// let mypromise = new Promise((resolve, reject) => {
//     let age = 10;
//     if (age < 18) {
//         reject("age is invalid")
//     }
//     else {
//         resolve("age is valid")
//     }
// });

// mypromise
//     .then((msg) => {
//         console.log(msg)
//     })

//     .catch((err) => {
//         console.log(err)
//     })


function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User data ....");
            resolve();
        }, 2000);
    });
}


function getUserBankDetail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User bank details ....");
            resolve();
        }, 1000);
    })
}
function getUserInsurance() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User Insurance ....")
            resolve();
        }, 2000);
    })
}

// getUser()
//     .then(() => {
//         return getUserBankDetail();
//     })
//     .then(() => {
//         return getUserInsurance();
//     })
//     .then(() => {
//         console.log("process....end")
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// async await

async function call() {
    await getUser();
    await getUserBankDetail();
    await getUserInsurance();
}
call()

console.log("end");
