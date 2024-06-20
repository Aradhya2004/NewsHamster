import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card my-5" style={{borderRadius: '15px'}}>
          <div style={{display: 'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
            <span className=" badge rounded-pill bg-danger">{(source) ? source : "dd"}</span>
          </div>
          <img style={{borderRadius: '15px'}} src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <small><p className="card-text">By {(author) ? author : "Unknown"} on {new Date(date).toGMTString()}</p></small>
            <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-primary my-2">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
