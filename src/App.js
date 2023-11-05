import React from 'react';
import NavbarWithMegaMenu from './navbar.jsx'; // Import your component
import Main from './main.jsx';

function App() {
  return (
    <div className="App">
      <NavbarWithMegaMenu /> {/* Use the MyComponent component */}
      <Main/>
    </div>
  );
}

export default App;