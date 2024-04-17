import React from 'react';

const Test = ({ a, b }) => {
  const c = () => {
    b('Oğuzhan');
  };

  return (
    <div>
      <div>
            <button onClick={c} className='p-2 rounded-xl bg-cyan-300'>click</button> 
      </div>
      
    {
        a === "Oğuz" ? <h1>Hello!, {a}</h1> : <p> Welcome {a} </p> 
    }
      
   <div className='ml-24 underline'>
   {
        a === 'Oğuz' ? <p>You cant see this page , until press button </p> : 'See this page now'
    }
   </div>

    </div>
  );
};

export default Test;
