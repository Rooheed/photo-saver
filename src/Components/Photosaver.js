import React  from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

//anchor tah, href attribute
function Photosaver(props) {
	if(props)
	{
		 console.log(props.posts);
    return <div>
                <Link className="addIcon" to="/AddPhoto"> </Link>
                <div className="photoGrid"> 
                    {props.posts
                        .sort(function(x,y) {
                            return y.id - x.id
                        })
                        .map((post, index) => <Photo key={index} post={post} {...props} index={index} />)}
                </div>
            </div>
	}
	else{
		 return 'loading...'    
	}
}

Photosaver.PropTypes = {
    posts: PropTypes.array.isRequired,
}


export default Photosaver