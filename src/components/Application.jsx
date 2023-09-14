import { fetchCounterArgument } from '../api/openai';

import React, { useState } from 'react';

const Application = () => {
  const [debateInput, setDebateInput] = useState('');
  const [counterDebate, setCounterDebate] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generateCounterDebate = async () => {
    setIsLoading(true);
    const counterArgument = await fetchCounterArgument(debateInput);
    setCounterDebate(counterArgument);
    setIsLoading(false);
  };

  const resetDebate = () => {
    setDebateInput('');
    setCounterDebate('');
  };

  return (
    <div className="flex flex-col items-center justify-center h-full h-screen bg-[#171717] ">


        <textarea type="text" placeholder='Enter your debate' class="input" onChange={(e) => setDebateInput(e.target.value)} style={{height: '100px', width: '300px'}}/>

      <button onClick={generateCounterDebate} className="button2" style={{marginTop:'30px'}} >

        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
        Generate Counter Debate
      </button>
      
      {isLoading ? <p className='text-white'>Loading...</p> : <div className='text-white p-10 w-2/3 sm-w-1/2 rounded' style={{marginTop:'10px'}}>{counterDebate}</div>}
      <button
        onClick={resetDebate}
        className="button3"
        style={{marginTop:'25px'}}
      >
        Reset Debate
      </button>
    </div>
  );
};


    


export default Application;