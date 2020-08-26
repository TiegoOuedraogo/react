import React from "react";
i//mport Item from "./Components/item";
import "./App.css";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      marchandises: [],
    };
  }
  componentDidUpdate() {
    fetch("/items")
      .then((res) => res.json())
      .then((items) => {
        this.setState({
          marchandises: items,
        });

      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if(!this.state.error){
      console.log("marchandises" + this.state.marchandises)
  
    }
    return <div></div>;
  }
}
//export
export default App;
