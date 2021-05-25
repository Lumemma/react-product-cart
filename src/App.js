import React from "react";
import Products from "./components/Products";
import data from "./data.json";

class App extends React.Component{
  constructor(){
    super();
    this.state =
      {products: data.products,
      size: "",
      sort: "",
    }
  }
  render(){
  return (
    <div class = "grid-container">
      <header>
        <a href ="/">React Product Cart</a>
      </header>
      <main>
        <div className= "content">
          <div className= "main content">
            <Products product={this.state.products}></Products>
          </div>
          <div className= "sidebar">
            Cart items
          </div>
        </div>
      </main>
      <footer>
        All rights reserved
      </footer>
    </div>
  );
  }
}
export default App;

