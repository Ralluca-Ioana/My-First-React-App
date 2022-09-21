import React from "react";
import './App.css';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      newElement:"",
      list:[]
    }
  }
  updateInput(key,value){

    this.setState({
      [key]:value
    });
  
  }
  addElement(){
  
    const newElement={
      id: 1 + Math.random(),
      value: this.state.newElement.slice()
    };

    const list=[...this.state.list];
    list.push(newElement);

    this.setState ({
      list,
      newElement:""
    });

  }

  deleteElement(id){
    const list = [...this.state.list];
 
    const updatedList = list.filter(element => element.id !== id);
   
    this.setState({list: updatedList});
  }
  render(){
    return (
      <div className="App">
        <div>
          <p>My List</p>
          <br/>
          <div className="sectionList">
            <div className="contentCenter">
              <input
              type="text"
              className="input"
              placeholder="Type element here..."
              value ={this.state.newElement}
              onChange={e => this.updateInput("newElement", e.target.value)}
              />
              <button
                className="buttonInput"
                onClick={() => this.addElement()}
              >Add</button>
              <br/>
            </div>
            
            <ul className="myList">
              {this.state.list.map(element => {
                return(
                  <li key={element.id}>
                  {element.value}
                  <button
                    className="buttonDelete"
                    onClick={() =>this.deleteElement(element.id)}
                  >
                    x
                  </button>
                </li>
                )
              
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
 
}

export default App;
