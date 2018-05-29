// Initialize Firebase
var config = {
    apiKey: "AIzaSyDCrFmMYdEjlySqLxoqOrg0D9-EzT6dJKo",
    authDomain: "fir-46f78.firebaseapp.com",
    databaseURL: "https://fir-46f78.firebaseio.com",
    projectId: "fir-46f78",
    storageBucket: "fir-46f78.appspot.com",
    messagingSenderId: "672088755879"
};
firebase.initializeApp(config);

//Submit form to Firebase
function submitForm(e) {
    saveInfo(this.state.curName, this.state.curCompany, this.state.curDetails);
}

//Function to get form values
function saveInfo(name, company, details) {
    console.log(name, company, details);
    const newMessageRef = firebase.database().ref("messages");
    newMessageRef.push({
        name: name,
        company: company,
        details: details
    });
}

// Post data to Firebase
/*firebase
  .database()
  .ref("/Name")
  .set(curName);
firebase
  .database()
  .ref("/Company")
  .set(curCompany);
firebase
  .database()
  .ref("/Details")
  .set(curDetails);

//Pull data from Firebase
firebase
  .database()
  .ref("/users")
  .on("value")
  .then(snapshot => {
    console.log(snapshot.val());
  })
  .catch(error => {
    console.log(error);
  });     
*/