// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyA1C2C-1UZpbJmdMh6yhMGkzi--9Pmf-a0",
    authDomain: "let-s-chat-a86ca.firebaseapp.com",
    databaseURL: "https://let-s-chat-a86ca-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-a86ca",
    storageBucket: "let-s-chat-a86ca.appspot.com",
    messagingSenderId: "107323704629",
    appId: "1:107323704629:web:cb1743f18a19da7b98b87c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);
    cation = "chat_room.html";
    */
   
    localStorage.setItem("user_name", user_name);
    
    window.location = "chat_room.html";
}
