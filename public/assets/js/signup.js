  var config = {
      apiKey: "AIzaSyCd4sdDQQZI8y3hlVYKkYIBz6umDdFPxMs",
      authDomain: "prodigee-c83ac.firebaseapp.com",
      databaseURL: "https://prodigee-c83ac.firebaseio.com",
      storageBucket: "prodigee-c83ac.appspot.com",
      messagingSenderId: "174769123946"
  };
  firebase.initializeApp(config);

    $("#submit").click(function(){
      var email = $("#userEmail").val().trim();
      var password = $("#userPassword").val().trim();
      firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
          // ...
      });
