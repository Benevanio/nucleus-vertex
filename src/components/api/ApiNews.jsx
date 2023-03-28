import React from 'react'
import './ApiNews.scss'
import { useState, useEffect } from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../navbar/Navbar';
const Api = () => {
  const APIURNEWSAPI = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=85b932b146bd4418943f0e62c98f976a';
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(APIURNEWSAPI);
      const data = await response.json();

      setArticles(data.articles);
      setLoading(false);

    }
    fetchArticles();
  }, [])

  if (loading) {
    return <div className="honeycomb">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  }
  return (
    <>
      <Navbar />
      <div className="container container2">
        <div className="row">
          {articles.map((article, id) => (
            <div className="col-sm-6 mb-3 mb-sm-0" key={id}>
              <div className="card mb-5 shadow-sm">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{article.author}</h5>
                    <p className="card-text">{article.content}</p>
                    <p className="card-text">{article.description}</p>
                    <p className="card-text">{article.publishedAt}</p>
                    <p className="card-text">{article.source.name}</p>
                    <p className="card-text">{article.title}</p>
                    <a href={article.url} target="_blank" rel="noreferrer" className="card-text">
                      Veja a materia completa em..
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <img src={article.urlToImage} alt="IMAGEN DA NOTICIA" className="card-img-top" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Api
