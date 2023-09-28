import React, { Component } from 'react'
import './NewsItemStyles.css'

export default class NewsItem extends Component {
    render() {

        return (
            <div>
                <div className="card " style={{ width: '20rem', margin: '20px 20px', textAlign: 'left', lineHeight: '1.2rem' }}>
                    <img src={this.props.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title ? this.props.title.substring(0, 87) : ''}
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                               {this.props.source}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </h5>
                        <p className="card-text y-1">{this.props.description ? this.props.description.substring(0, 182) : ''}</p>

                        <a target='#' href={this.props.url} className="btn btn-primary">View More</a>

                    </div>
                    <div className="card-footer text-body-secondary">
                      By {this.props.author}  on {this.props.publishDate}
                    </div>
                </div>
            </div>
        )
    }
}
