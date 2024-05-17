import React from 'react'
import '../index.css'

class Post extends React.Component {
    render() {
        return (
            <div class="card mb-3 post">
                <div class="row g-0">
                    <div class="col-md-4 post-img-box">
                        <img class="img-fluid rounded-start post-img" src={this.props.image}></img>
                    </div>
                    <div class="col-md-8 post-info-box">
                        <div class="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">{this.props.category}</p>
                            <p className="card-text">{this.props.text}</p>
                            <a className="card-text post-website">{this.props.website}</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post