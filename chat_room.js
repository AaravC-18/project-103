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
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome " +user_name+"!"

  function addRoom()
  {
     room_name = document.getElementById("room_name").value;

     firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name"
     });

     localStorage.setItem("room_name", room_name);

     window.location = "kwitter_page.html";
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name-"+ Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
   document.getElementById("output").innerHTML += row;

   //End code
   });});}
  getData();
  function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location= "chat_page.html"
  }

  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name")
    window.location.replace("index.html");
    }