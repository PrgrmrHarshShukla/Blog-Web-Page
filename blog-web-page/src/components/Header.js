import React from "react";

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users: null
        }
    }

    componentDidMount(){
        fetch('https://reqres.in/api/users').then((response) => {response.json().then((result) => {
            this.setState({
                users: result.data
            })
        })
    })
    }


    render(){
    return (
    <div className = "mainHeader">
        <div className = "headerElement">
           <div className = "headerEle"> 
            <h2>What is happening around the world?</h2>
            <p className = "smallText">{ this.state. users ? 
            <div>
              <p>-By {this.state.users[5].first_name} {this.state.users[5].last_name}
              </p>
            </div>  :  null
            }</p>
           </div>
           <div className = "headerEle">    
            <img className = "headerImg el1" src = "https://images.unsplash.com/photo-1645534728577-d87bd3e22d5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbm9teSUyMGFyb3VuZCUyMHRoZSUyMHdvcmxkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt = "img1" />
           </div>
        </div>    
        <div className = "headerElement">
           <div className = "headerEle">  
            <h2>European Union in crisis while Russia watches.</h2>
            <p className = "smallText">{ this.state. users ? 
            <div>
              <p>-By {this.state.users[4].first_name} {this.state.users[4].last_name}
              </p>
            </div>  :  null
            }</p>
           </div>
           <div className = "headerEle"> 
            <img className = "headerImg el2" src = "https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kdXN0cmllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" alt = "img2" />
           </div> 
        </div>
    </div>
    );
    }
}

export default Header;