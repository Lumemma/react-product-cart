
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

