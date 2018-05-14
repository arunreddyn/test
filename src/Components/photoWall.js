import React,{Component} from 'react'


class photoWall extends Component{
    render(){
        return<div>
            {this.props.posts.map(post => <photo post = {post}/>)}
        </div>
    }
}
export default photoWall