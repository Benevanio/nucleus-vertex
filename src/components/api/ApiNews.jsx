import React from 'react'
import './ApiNews.scss'
import { useState,useEffect } from 'react'
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
        return     <div class="spinner">
        <div class="Spinner"></div>
        </div>
    }
  return (
    <div className="container">
        <div className="row">
        {articles.map((article, id ) => (
          <div className="col-md-4" key={id}>
            <div className="card mb-4 shadow-sm">
              <p className="card-text">{article.author}</p>
              <p className="card-text">{article.content}</p>   
              <p className="card-text">{article.description}</p>
              <p className="card-text">{article.publishedAt}</p>
              <p className="card-text">{article.source.name}</p>
              <p className="card-text">{article.title}</p>
              <p className="card-text">{article.url}</p>
              <p className="card-text">{article.urlToImage}</p>
              </div>
              </div>
        ))}
        </div>

   </div>
  )
}

export default Api
