
var firebaseConfig = {
  apiKey: "AIzaSyDH9n6cujJcW7GSbifhDTUnk5C1kw4MMuI",
  authDomain: "let-s-chat-web-app-210a7.firebaseapp.com",
  databaseURL: "https://let-s-chat-web-app-210a7-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-web-app-210a7",
  storageBucket: "let-s-chat-web-app-210a7.appspot.com",
  messagingSenderId: "732935722301",
  appId: "1:732935722301:web:2997bedb0bac5b3efee154"
};
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
   
}



