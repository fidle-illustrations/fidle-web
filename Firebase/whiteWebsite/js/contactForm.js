
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAtYQA9FmMoxrGC1r__7YbWdaDJl_hvz4Q",
    authDomain: "white-760d3.firebaseapp.com",
    databaseURL: "https://white-760d3.firebaseio.com",
    projectId: "white-760d3",
    storageBucket: "white-760d3.appspot.com",
    messagingSenderId: "582841221508",
    appId: "1:582841221508:web:373ae7bc8012a7e5005dd1",
    measurementId: "G-4JB6JSJKCB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


//var messagesRef = firebase.database().ref('contactForm');

// Listen for form submit
window.onload=function(){
    document
        .getElementById('contactForm')
        .addEventListener('submit', submitForm);
}

// Submit form
function submitForm(e){
    e.preventDefault();

    //Get value
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get form value
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}

