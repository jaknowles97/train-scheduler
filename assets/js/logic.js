var config = {
    apiKey: "AIzaSyCUVWj4NnT0VRmxgcXja_QAkPxbXrJQ6g4",
    authDomain: "test-a7846.firebaseapp.com",
    databaseURL: "https://test-a7846.firebaseio.com",
    projectId: "test-a7846",
    storageBucket: "test-a7846.appspot.com",
    messagingSenderId: "71907287895"
  };
  firebase.initializeApp(config);
  var database = firebase.database();


$("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
    var trainName = $("#train-name-input").val().trim();
    var destination = $("#dest-input").val().trim();
    var frequency = $("#freq-input").val().trim();

    var newTrain = {
      name: trainName,
      destination: destination,
      rate: frequency,
      
    };
  
    database.ref().push(newTrain);
  
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.rate);

    alert("Train successfully added");
  
    $("#train-name-input").val("");
    $("#dest-input").val("");
    $("#freq-input").val("");
  });
  
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {
  
    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().destination;
    var frequency = childSnapshot.val().rate;


  
    // Add each train's data into the table
    $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
    destination + "</td><td>"+ frequency + "</td><td>" + frequency + "</td></tr>");
  });