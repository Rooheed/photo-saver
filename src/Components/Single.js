import React, {Component} from 'react'
import Photo from './Photo'
import Comments from './Comments'

class Single extends Component {
    render() {
        const { match, posts} = this.props
        const id = Number (match.params.id)
        const post = posts.find((post) => post.id === id)
        const comments = this.props.comments[match.params.id] || []
        const index = this.props.posts.findIndex((post) => post.id === id)
            if(this.props.loading === true) {
                return <div className="loader"> ...loading </div>
            } else if (post) {
        return (
        <div>
            <div  className="header-1">
            <h1>Photosaver</h1>
             <p className="p-1">Easy to save photos</p>
             <a className="logout" href="/login" >Logout</a>

       </div>
        <div className='single-photo'>

            <Photo post={post} {...this.props} index={index} />
            <Comments startAddingComment={this.props.startAddingComment} comments={comments} id = {id}/>
            </div>
            </div>
        )
            } else {
                return <p> ...no post found </p>
        
        }
    }
}

export default Single