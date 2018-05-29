import React, { Component } from "react";
import ContractForm from "./ContractForm.js";
import ContractDisplay from "./ContractDisplay.js";
import firebase from "firebase";

var config = {
  apiKey: "AIzaSyDCrFmMYdEjlySqLxoqOrg0D9-EzT6dJKo",
  authDomain: "fir-46f78.firebaseapp.com",
  databaseURL: "https://fir-46f78.firebaseio.com",
  projectId: "fir-46f78",
  storageBucket: "fir-46f78.appspot.com",
  messagingSenderId: "672088755879"
};
firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contracts: [],
      curName: "",
      curCompany: "",
      curDetails: ""
    };
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref("contracts");
    itemsRef.on("value", snapshot => {
      let contractss = snapshot.val();
      let newState = [];
      for (let contract in contractss) {
        newState.push({
          name: contractss[contract].name,
          company: contractss[contract].company,
          details: contractss[contract].details
        });
      }
      console.log(newState.length);
      this.setState({
        contracts: newState
      });
    });
  }

  updateFields = (field, newValue) => {
    this.setState({
      // the bracket syntax says to take the field variable, look inside, and that
      // string will be the field we use
      [field]: newValue
    });
  };

  addContract = () => {
    const itemsRef = firebase.database().ref("contracts");
    const newContract = {
      name: this.state.curName,
      company: this.state.curCompany,
      details: this.state.curDetails
    };
    itemsRef.push(newContract);

    this.setState({
      curName: "",
      curCompany: "",
      curDetails: ""
    });
  };

  render() {
    console.log(this.state);
    const { curName, curCompany, curDetails, contracts } = this.state;
    // map over the contracts, for each one return a ContractDisplay
    const contractDisplays = contracts.map(contract => {
      return <ContractDisplay contract={contract} />;
    });

    return (
      <div className="App">
        <ContractForm
          name={curName}
          company={curCompany}
          details={curDetails}
          updateParent={this.updateFields}
          addContract={this.addContract}
        />

        {contractDisplays}
      </div>
    );
  }
}

export default App;
