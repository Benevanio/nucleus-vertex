import React from 'react'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import './Home.scss'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="home">
        <div className="home__container">
          <h1 className="home__title">Welcome to nucleus vertex</h1>
          <p className="home__description">
            O nucleus vertex é um projeto de código aberto que utiliza a API do
            News API para exibir as últimas notícias do mundo.
          </p>
          <p className="home__description">
            O projeto foi desenvolvido com ReactJS, Bootstrap e Sass.
          </p>

        </div>
        <div className="Section_api__container">
          <button className="btn btn-primary">
            <Link className="link" to="/api">
              Acessar a API
              <i className="fas fa-arrow-right"></i>
            </Link>
          </button>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home
