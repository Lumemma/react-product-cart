import React from "react";
import Filter from "./components/Filter";
import Products from "./components/Products";
import data from "./data.json";

class App extends React.Component{
  constructor(){
    super();
    this.state =
      {products: data.products,
      size: "",
      sort: "",
      color: "",
    };
  }
  sortProducts  (event) {
    //implement
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state)=> ({
      sort: sort,
      products: this.state.products
      .slice()
      //sort method
      .sort((a, b)=>
        sort==="lowest"
        ? a.price > b.price
        ? 1
        :-1
        :sort==="highest"
        ? a.price < b.price
        ? 1
        :-1
        :a._id < b._id
        ? 1
        :-1
      ),
    }));
  };
  filterProducts =(event)=> {
    //implement size
    console.log(event.target.value);
    if(event.target.value===""){
      this.setState({size: event.target.value, product:data.products});
    } else {
    this.setState({
      size: event.target.value,
      products: data.products.filter(product => product.availablesizes.indexOf(event.target.value)>=0
      ),
    })
   }
  };
  filteredProducts =(event)=> {
    //implement color
    console.log(event.target.value);
    if(event.target.value===""){
      this.setState({color: event.target.value, product:data.products});
    } else {
    this.setState({
      color: event.target.value,
      products: data.products.filter(product => product.color.indexOf(event.target.value)>=0
      ),
    });
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
            <Filter count= {this.state.products.length}
              color={this.state.color}
              size= {this.state.size}
              sort= {this.state.sort}
              filteredProducts={this.filteredProducts}
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts}
            ></Filter>
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

