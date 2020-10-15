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
var Persons = []
var Boots = []
window.addEventListener('DOMContentLoaded', function() {
    this.getPerson();
    this.getBoots();
});

/************************* SELECT QUERY IN REALTIME DB FROM USERS COLLECTION *****************/
function getPerson() {
    db.ref('users').once('value').then((snapshot) => {
        this.Persons = snapshot.val()
    }).then(() => {
        var table = document.getElementById('PersonTable')
        console.log(this.Persons)
        let i = 1;
        this.Persons.forEach(element => {
            var row = table.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = element.userId;
            cell2.innerHTML = element.email;
            cell3.innerHTML = element.username;
            i += 1
        });
    })
}
/************************* SELECT QUERY IN REALTIME DB FROM BOOTS COLLECTION *****************/


function getBoots() {
    db.ref('boots').once('value').then((snapshot) => {
        this.Boots = snapshot.val()
    }).then(() => {
        var table = document.getElementById('BootsTable')
        console.log(this.Boots)
        let i = 1;
        Object.keys(this.Boots).forEach(key => {
            let element = this.Boots[key]
            var row = table.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = element.bootname;
            cell2.innerHTML = element.bootdesc;
            cell3.innerHTML = element.cost;
            i += 1
        });
    })
}



/************************* INSERT QUERY IN REALTIME DB FROM USERS COLLECTION *****************/


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

/************************* INSERT QUERY IN REALTIME DB FROM BOOTS COLLECTION *****************/

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