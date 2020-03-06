import React, { Component } from 'react';
import axios from 'axios';

import Select from 'react-select';
import { Link } from 'react-router-dom';

const options = [
    {value: 'The Eternal Castle Remastered', label: 'The Eternal Castle Remastered' },
    {value:  'Bury Me, My Love', label: 'Bury Me, My Love' },
    {value:  'New Super Mario Bros. U Deluxe', label: 'New Super Mario Bros. U Deluxe'},
    {value:  'Mario & Luigi: Bowser\'s Inside Story', label: 'Mario & Luigi: Bowser\'s Inside Story'}
  ];

class Post extends Component {

    state = {
        ermessage : false,
        selectedOption: null,
        posts: []
    }

    componentDidUpdate () {
      /*   if(this.state.posts){
            return
        }
       */  axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            const posts = response.data.slice(0,5)
            const updatedposts = posts.map(post => {
                return {
                    ...post,
                    userId: post.userId
                }
            })
            this.setState({posts: updatedposts})
            return

        }).catch(er => {
            this.setState({ermessage: true})
        })
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
        
      };
    

    render () {
        
        let posts = null
        if(this.state.title){
            posts = this.state.posts.map(post => {
                return <div style={{textAlign: 'center'}}>{post.title}</div>
            })
        }

        const { selectedOption } = this.state;
        return (
            <div className="container" style={{textAlign: 'center'}}>
            <h1>Game to run test on: {this.state.Game}</h1>
            <div className="gamesel">
            <h5 className="yellow-text text-darken-3" style={{ textAlign: 'center' }}>Game Select</h5>
            
          <button className="btn waves-effect waves-light btn" name="action" color="yellow"><Link to='/runtest' style={{textDecoration: 'none', color: 'white'}}>next</Link>
          <Link to='/runtest' style={{textDecoration: 'none', color: 'white'}}><i className="material-icons right">send</i></Link>
      </button>    
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            
          />
    
          </div>
          {posts}
          </div>


        )
    }
}

export default Post;