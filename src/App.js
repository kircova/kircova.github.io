import logo from './logo.svg';
import './App.css';
import { TypeAnimation } from 'react-type-animation';
import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu'
import {useRef} from 'react'


function App() {
  const projects = useRef(null);
  const about = useRef(null);
  const main = useRef(null);

  //Home Constantss
  const scrollToSection = (elementRef) => 
  {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }

  //Project Constants
  const [selectedItem, setSelectedItem] = useState(null); 
  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };


  return (
    <header className="App">

      <div className='main-page'>
        <div className='main-page-row'>
            <div className='main-page-col'>
              <div className='home-title1'>
                <Name/>
                <Title/> based in London.
              </div>
            </div>

            <div className='main-page-col'>
              <ul className='main-page-list'>
                <li onClick={() => scrollToSection(projects)} className='home-link'>
                <img className='main-page-icon' src='rocket.svg' alt='rocket-icon' width='28' heigh='28'/>
                  Projects 
                </li>
                <li onClick={() => scrollToSection(about)} className='home-link'>
                <img className='main-page-icon' src='info.svg' alt='rocket-icon' width='28' heigh='28'/>
                  About
                </li>
              </ul>
            </div>
          </div>
          <div className='main-page-row'>
            <hr className='main-page-line'></hr>
          </div>
      </div>

      <div ref={projects} className='project-page'> 

       <div class='projects-title'>a</div>
       
       <h2 className='projects-title1'> Galactic Map</h2>
       <div class="projects-row">

          <div class="projects-column-left">
              <div className='projects-column-left-box1'>
                <div class='projects-column-image'>
                  <ul class='projects-list'>
                    <Item text='Car Crash Detection' selected={selectedItem === 1}
                    onSelect={() => handleSelectItem(1)} />
                    <Item text='Vinly Music Store' selected={selectedItem === 2}
                    onSelect={() => handleSelectItem(2)} />
                    <Item text='Asleep Fly Behaviour' selected={selectedItem === 3}
                    onSelect={() => handleSelectItem(3)} />
                    <Item text='Social Networking' selected={selectedItem === 4}
                    onSelect={() => handleSelectItem(4)} />
                    <Item text='Full Duplex MAC Protocol' selected={selectedItem === 5}
                    onSelect={() => handleSelectItem(5)} />
                  </ul>
                </div>
              </div>
              <div className='projects-column-left-box2'>

              </div>
          </div>
          
          <div class="projects-column-middle"></div>

          <div class="projects-column-right">
            <div class="projects-column-right-box-1">Column 2 </div>
            <div class="projects-column-right-box-2">Column 2 </div>
          </div>

        </div>

      </div>

      <div ref={about} className='about-page'> 
       <h3>About</h3>
      </div>

    </header>
  );
}


function Name() {
  return (
      <div className='yusufhan-h1'>
        Kircova.
      </div>
  );
}

function Title() {
  return (
    <TypeAnimation className='yusufhan-h2'
      sequence={[
        1500, 
        'Developer', // Types 'One'
        1500, 
        'Engineer', // Types 'One'
        1500, 
        'Data Scientist', // Types 'One'
        1500, 
        'Designer', // Types 'One'
        () => {
          console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
    />
  );
}

function Item({ text, selected, onSelect }) {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  const handleClick = () => {
    onSelect();
  };
  return (
    <div
      className={`project-list-item ${hover ? 'hover' : ''} ${selected ? 'selected' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {text}
    </div>
  );
}





export default App;
