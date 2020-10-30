
// Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyAtYQA9FmMoxrGC1r__7YbWdaDJl_hvz4Q",
//     authDomain: "white-760d3.firebaseapp.com",
//     databaseURL: "https://white-760d3.firebaseio.com",
//     projectId: "white-760d3",
//     storageBucket: "white-760d3.appspot.com",
//     messagingSenderId: "582841221508",
//     appId: "1:582841221508:web:373ae7bc8012a7e5005dd1",
//     measurementId: "G-4JB6JSJKCB"
// };
function initializeApp() {
const firebaseConfig = {
    apiKey: "AIzaSyB_4Tg9QEBdrD6YuihyhNvDkNq-pyT2hOM",
    authDomain: "fidle-26316.firebaseapp.com",
    databaseURL: "https://fidle-26316.firebaseio.com",
    projectId: "fidle-26316",
    storageBucket: "fidle-26316.appspot.com",
    messagingSenderId: "73131237198",
    appId: "1:73131237198:web:7664cfca47a61fef8c881f",
    measurementId: "G-JNXYY87C39"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Reference for form collection(3)
let formMessage = firebase.database().ref('register');

//listen for submit event//(1)
window.onload=function(){
    document
        .getElementById('contactForm')
        .addEventListener('submit', formSubmit);
}


//Submit form(1.2)
function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    let name = document.querySelector('#name').value;
    let company = document.querySelector('#company').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    let message = document.querySelector('#message').value;

    //send message values
    sendMessage(name, email, company, phone, message);

    //Show Alert Message(5)
    document.querySelector('.alert').style.display = 'block';

    //Hide Alert Message After Seven Seconds(6)
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 7000);

    //Form Reset After Submission(7)
    document.getElementById('contactForm').reset();
}

//Send Message to Firebase(4)

function sendMessage(name, email, company, phone, message) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
        name: name,
        email: email,
        company: company,
        phone: phone,
        message: message,
    });
}

}
