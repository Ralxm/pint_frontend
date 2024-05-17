import React from 'react'
import './index.css'
import Post from "./Post";


class PostBox extends React.Component{
    render(){
        return(
            <div className='col-lg-6 col-sm-12 posts-box'>
                {this.props.info.map((arr) =>{
                    return(
                        <Post title={arr.title} category={arr.category} text={arr.text} website={arr.website} image={arr.image}></Post>
                    )
                })}
            </div>
        )
    }
}

export default PostBox