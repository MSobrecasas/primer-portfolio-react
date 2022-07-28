import React from 'react'
import './Servicios.css'
import { GiCheckMark } from 'react-icons/gi'


export const Servicios = () => {
  return (
    <section id='servicios'>

      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container servicios__container'>
                {/*  UI DESING*/}
        <article className='servicios'>
                    <div className='servicios__head'>
            <h3>UI/UX Desing</h3>
          </div>

                    <ul className='servicios__list'>
                        <li>
                            <GiCheckMark className='servicios__list-icon' />
                            <p>
                                I can create a website that will be user friendly and easy to use.
                            </p>
                        </li>
                        <li>
                            <GiCheckMark className='servicios__list-icon' />
                            <p>
                                I can create a website that will be user friendly and easy to use.
                            </p>
                        </li>
                        <li>
                            <GiCheckMark className='servicios__list-icon' />
                            <p>
                                I can create a website that will be user friendly and easy to use.
                            </p>
                        </li>
                        <li>
                            <GiCheckMark className='servicios__list-icon' />
                            <p>
                                I can create a website that will be user friendly and easy to use.
                            </p>
                        </li>
          </ul>
                </article>
                {/*  web develoment*/}
                <article className='servicios'>
                    <div className='servicios__head'>
                        <h3>Web development</h3>
                    </div>
                    <ul className='servicios__list'>
                        <li>
                            <GiCheckMark className='servicios__list-icon' />
                            <p>
                                I can create a website that will be user friendly and easy to use.
                            </p>
                        </li>
                        <li>
                            <GiCheckMark className='servicios__list-icon' />
                            <p>
                                I can create a website that will be user friendly and easy to use.
                            </p>
                        </li>
                        <li>
                            <GiCheckMark className='servicios__list-icon' />
                            <p>
                                I can create a website that will be user friendly and easy to use.
                            </p>
                        </li>
                        <li>
                            <GiCheckMark className='servicios__list-icon' />
                            <p>
                                I can create a website that will be user friendly and easy to use.
                            </p>
                        </li>
                    </ul>
                </article>
                {/*  web develoment*/}
                <article className='servicios'>
                    <div className='servicios__head'>
                        <h3>Content creation</h3>
                    </div>
                    <ul className='servicios__list'>
                        <li>
                            <GiCheckMark className='servicios__list-icon' />
                            <p>
                                I can create a website that will be user friendly and easy to use.
                            </p>
                        </li>
                        <li>
                            <GiCheckMark className='servicios__list-icon' />
                            <p>
                                I can create a website that will be user friendly and easy to use.
                            </p>
                        </li>
                        <li>
                            <GiCheckMark className='servicios__list-icon' />
                            <p>
                                I can create a website that will be user friendly and easy to use.
                            </p>
                        </li>
                        <li>
                            <GiCheckMark className='servicios__list-icon' />
                            <p>
                                I can create a website that will be user friendly and easy to use.
                            </p>
                        </li>
                    </ul>


        </article>
      </div>
    </section>
  )
}
export default Servicios