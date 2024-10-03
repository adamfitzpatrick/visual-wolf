import { ProfileOutlined } from '@ant-design/icons';

import './app.css';
import { Hexes } from '../atoms/hexes';
import { Storyteller } from '../atoms/storyteller-icon';

function firstTimeHeader() {
  return (
    <div className='nav'>
      <div className='nav-link active'>create</div>
      <div className='nav-link'>manage</div>
      <div className='nav-link'>play</div>
      <div><span className="account-button material-symbols-outlined">manage_accounts</span></div>
    </div>
  );
}

function firstTimeMain() {
  return (
    <div className='workflow'>
      <div className='action-sequence'>
        <div className='action-step'>
          <Hexes width='10rem' top={-14} color={'rgb(242, 81, 1)'} />
          <div className='action-text orange'>Game</div>
        </div>
        <div className='action-step'>
          <Hexes width='10rem' top={-14} color={'rgb(68, 148, 129)'} />
          <div className='action-text green'>Map</div>
        </div>
        <div className='action-step'>
          <Hexes width='10rem' top={-14} color={'rgb(214, 255, 246)'} />
          <div className='action-text light-green'>Entity</div>
        </div>
        <div className='action-step jello'>
          <Hexes width='10rem' top={-14} color={'rgb(133, 237, 213)'} />
          <div className='action-text'>Assemble</div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className='app'>
      <div className='header'>
        <div className='app-name'>
          GridWolf
        </div>
        {firstTimeHeader()}
      </div>
      <div className='main'>
        <div>
          <Hexes top={-20} left={-40} zIndex={-1} fixed />
          <Hexes top={-20} left={84} zIndex={-1} fixed />
          <Hexes top={88} left={22} zIndex={-1} fixed />
          <Hexes top={195} left={-40} zIndex={-1} fixed />
          <Hexes top={303} left={22} zIndex={-1} fixed />
          <Hexes top={-20} left={208} zIndex={-1} fixed />
        </div>
        <div>
          <Hexes bottom={-20} right={-40} />
          <Hexes bottom={-20} right={84} />
          <Hexes bottom={-20} right={208} />
          <Hexes bottom={88} right={22} />
          <Hexes bottom={195} right={-40} />
          <Hexes bottom={303} right={22} />
          <Hexes bottom={411} right={84} />
          <Hexes bottom={519} right={22} />
          <Hexes bottom={519} right={146} />
          <Hexes bottom={519} right={270} />
          <Hexes bottom={411} right={209} />
        </div>
        {firstTimeMain()}
        <div className='illustration'>
          <Storyteller width='1440px'/>
        </div>
      </div>
    </div>
  );
}
