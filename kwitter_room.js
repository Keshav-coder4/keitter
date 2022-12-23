var firebaseConfig = {
      apiKey: "AIzaSyBTJifLhZKQusACdiCxGOTKbqBBfu92lVI",
      authDomain: "class-94-c7466.firebaseapp.com",
      databaseURL: "https://class-94-c7466-default-rtdb.firebaseio.com",
      projectId: "class-94-c7466",
      storageBucket: "class-94-c7466.appspot.com",
      messagingSenderId: "635439647875",
      appId: "1:635439647875:web:10df07187ce0e3cc8c9fb6"
    };
    
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML=" Welcome "+ user_name +"!";

     function addRoom()
     {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
        });
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_page.html";
     }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("roomnames"+ Room_names);
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectedToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectedToRoomName(name)
{
  console.log(name)
  localStorage.setItem("room_name" , name);
   window.location = "kwitter_page.html";
}


