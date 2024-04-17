import React, { useState , useEffect} from 'react';
// import Test from './Test';
// import useBookStore from "./BookStore";
// import BookForm from './Bookform';
// import BookList from './BookList';
import CounterComponent from '/src/CounterComponent';


    

function App() {
  // const [name, setName] = useState('Oğuz');
  // const reset = useBookStore((state) => state.reset);

  // useEffect(() => {
  //   reset()
  // } , [reset])



  return (
    <div>
      {/* <Test a={name} b={setName} /> */}
      {/* <h2>My library store</h2> */}
      {/* <BookForm /> */}
      {/* <BookList /> */}
      <CounterComponent />
    </div>
  );
}

export default App;
