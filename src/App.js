import hacking from './hacking-img.png';
import './App.css';

import Typewriter from 'typewriter-effect';

function App() {
  return (
    <div className="App">
        <img src={hacking} alt="background hacking" className='bg-img'/>
        <div className='black-screen'>
          <Typewriter
            options={{
              strings: ['Você foi hackeado!'],
              loop: true,
              autoStart: true,
            }}
          />
        </div>
    </div>
  );
}

export default App;
