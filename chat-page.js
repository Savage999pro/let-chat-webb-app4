var firebaseConfig = {
    apiKey: "AIzaSyCCK5JHD9CSGqPpwCfOLNpjQKYmCDYcYXc",
    authDomain: "let-chat-web-app-63545.firebaseapp.com",
    databaseURL: "https://let-chat-web-app-63545-default-rtdb.firebaseio.com",
    projectId: "let-chat-web-app-63545",
    storageBucket: "let-chat-web-app-63545.appspot.com",
    messagingSenderId: "53908731332",
    appId: "1:53908731332:web:baf6f0919df23987172091"
  };
  
  
  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

 } });  }); }
getData();
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name")
    window.location = "let_chat_web_app_room.html";
}
function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    Name:user_name,
message:msg,
like:0
});


}