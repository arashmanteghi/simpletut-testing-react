import React from 'react';

import Header from './component/header';
import Headline from './component/headline';

import './app.scss';

const tempArr = [{
  fName: 'Arash',
  lName: 'Manteghi',
  email: 'arash.manteghi@gmail.com',
  age: 31,
  onlineStatus: true,
}]

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Headline
          header="Posts"
          desc="Click the button to render posts"
          tempArr={tempArr}
        />
      </div>
    </div>
  );
}

export default App;
