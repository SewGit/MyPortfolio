import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import {CgFigma} from 'react-icons/cg'
import {SiReact} from 'react-icons/si'
import {FaUsers} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="AboutImg"/>
                </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                    <article className='about__card'>
                        <CgFigma className='about__icon'/>
                        <h5>UI/UX</h5>
                        <small>Figma, Adobe XD, Draw.io</small>
                    </article>

                    <article className='about__card'>
                        <SiReact className='about__icon'/>
                        <h5>Web Developing</h5>
                        <small>Eclipse IDE, PHP, MERN, Mongo DB, and the Android Studio</small>
                    </article>
          
                    <article className='about__card'>
                        <FaUsers className='about__icon'/>
                        <h5>Experience</h5>
                        <small>create projects with</small><br/>
                        <small>Figma, Eclipse IDE, PHP, MERN, Mongo DB, and the Android Studio</small>
                    </article>
                </div>
                    <p>
                                I am 4th year undergraduate
                        student. I have great skills in UI/UX and web
                        developing. I have knowledge of figma,
                        React and Node. I m a fast
                        learner and I am seeing an
                        internship position in the industry. I
                        am a person who is energetic,
                        selfmotivated, trustworthy,
                        responsible, and hardworking.

                        I have the capacity to think
                        logically, quantitatively, and
                        creatively.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About