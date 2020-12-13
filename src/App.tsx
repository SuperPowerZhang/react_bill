import React from 'react';
import styled from "styled-components";

const Button =styled.button`
color:grey;
background-color:pink;
&:hover{
background-color:green;
}
`;

function App() {
  return (
    <div >
      <Button >
        hello world!
      </Button>
    </div>
  );
}

export default App;
