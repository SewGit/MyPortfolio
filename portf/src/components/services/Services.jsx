import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>User Research and analyzing</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Customer journey mapping</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>UI and interation Design and Testing</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Rapid and Interactive prototyping</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Wireframe and Interactive Prototyping</p>
            </li>
          </ul>
        </article>
        
        {/*End of UI UX*/}

        <article className='service'>
          <div className="service__head">
            <h3>Quality Assurance</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Testing the application</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Automation Testing</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Manual Testing</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Get final approval from client</p>
            </li>
          </ul>
        </article>
        {/*End Of Assurance */}

        
        <article className='service'>
          <div className="service__head">
            <h3>Web Devoloping</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>frontend development</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>web designing using HTML, JavaScript and CSS</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Esure Responsive Design</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Android studio App Design</p>
            </li>
          </ul>
        </article>
        {/*End Of Develop*/}
      </div>
      
    </section>
  )
}

export default Services