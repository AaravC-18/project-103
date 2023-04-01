var firebaseConfig = {
    apiKey: "AIzaSyA1C2C-1UZpbJmdMh6yhMGkzi--9Pmf-a0",
    authDomain: "let-s-chat-a86ca.firebaseapp.com",
    databaseURL: "https://let-s-chat-a86ca-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-a86ca",
    storageBucket: "let-s-chat-a86ca.appspot.com",
    messagingSenderId: "107323704629",
    appId: "1:107323704629:web:cb1743f18a19da7b98b87c"
  };
  
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage,getItem("user_name");
  room_name=localStorage,getItem("room_name");

  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message : msg,
        like:0
    });
    document.getElementById("msg").value="";
  }

