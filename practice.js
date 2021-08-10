
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCSxU0HmEeW-DGsFBlftkvMa_68N9Ay82M",
    authDomain: "kwitter-d5b60.firebaseapp.com",
    databaseURL: "https://kwitter-d5b60-default-rtdb.firebaseio.com",
    projectId: "kwitter-d5b60",
    storageBucket: "kwitter-d5b60.appspot.com",
    messagingSenderId: "764203852533",
    appId: "1:764203852533:web:82464b7afcc7f3efea9bbc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser() {
user_name= document.getElementById("user_name").value;

firebase.database().ref("/").child(user_name).update({
purpose:"Adding User"
});
}