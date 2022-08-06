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



user_name = localStorage.getItem("user_name");

document.getElementById("welcome_user").innerHTML = "Welcome " + user_name + "!!";



function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("ROOM NAME", room_name);

  window.location = "chat-page.html";
}
function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;

      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

    });
  });
}
getData();
function redirectToRoomName(clicked_name) {
  console.log(clicked_name);
  localStorage.setItem("ROOM NAME", clicked_name);
  window.location = "let_chat_web_app_room.html";
}
function logout() {
  localStorage.removeItem("ROOM NAME");
  localStorage.removeItem("user_name");
  window.location = "index.html";
}




