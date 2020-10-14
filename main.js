var firebaseConfig = {
    apiKey: "AIzaSyBnbARy0VlxduD7U4QWqXTFlZ0eOISuqDg",
    authDomain: "adbms-demo.firebaseapp.com",
    databaseURL: "https://adbms-demo.firebaseio.com",
    projectId: "adbms-demo",
    storageBucket: "adbms-demo.appspot.com",
    messagingSenderId: "13847103455",
    appId: "1:13847103455:web:72d264a65852dd8068a66a",
    measurementId: "G-2HSS70QMQP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.database();


function insertPerson() {
    let userId = document.getElementById('id1').value;
    let username = document.getElementById('personname').value;
    let email = document.getElementById('personmail').value
    db.ref('users/' + userId).set({
        username: username,
        email: email,
        userId: userId
    }).then(() => {
        console.log('Hello')
    }).catch(err => {
        console.log(err)
    })
}


function insertBoot() {

    let cost = document.getElementById('cost').value;
    let bootname = document.getElementById('bootname').value;
    let bootdesc = document.getElementById('bootdesc').value
    db.ref('boots/' + bootname).set({
        bootname: bootname,
        bootdesc: bootdesc,
        cost: cost
    }).then(() => {
        console.log('Hello')
    }).catch(err => {
        console.log(err)
    })
}