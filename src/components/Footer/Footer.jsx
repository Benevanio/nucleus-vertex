import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer__content">
              <div className="footer__social-icon">
                <a href="https://bene-teslav1.vercel.app" target="_blank" rel="noreferrer">
                  <i className="fab fa-react"></i>
                </a>
                <a href="https://bene-teslav1.vercel.app" target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/bene-tesla/" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="http://lattes.cnpq.br/9324222644313081" target="_blank" rel="noreferrer">
                  <i className="fab fa-lattes"></i>
                </a>
              </div>
              <p className="footer__text">
                © 2023 - Todos os direitos reservados
              </p>
            </div>
          </div>
        </div>
      </div>


    </footer>
  )
}

export default Footer
