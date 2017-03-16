import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = props => {
  return (
    <div>
      {props.children}
    </div>
  );
};

export default App;
