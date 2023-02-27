import React from "react";

class Content extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      users: null
    }
  }

  componentDidMount(){
   fetch('https://reqres.in/api/users').then((response) => { 
   response.json().then((result) => {
   //   console.warn(result.data)
   this.setState({
      users: result.data
   })
   })
   })
  }

  render(){ 
    const date = new Date();
    const otherDate = new Date(date);
    otherDate.setDate(date.getDate() - 1);
    const anotherDate = new Date(date);
    anotherDate.setDate(date.getDate() - 2);
   return (
    <div className = "container" >
      <div className = "bigText2"><h1>Featured Blogs</h1></div><hr /> 


      <div className = "content">
         <div className = "contentText">
            <h3>What is happening around the world?</h3>
            <p>What is happening around the world? A highly curated platform for creating, collecting and trading unique NFTs. Trade with confidence on the world's fastest and most secure crypto exchange...</p><br />
            <p>Date: {date.toDateString()}</p>
             <p>{ this.state. users ? 
            <div>
              <p>Author: {this.state.users[0].first_name} {this.state.users[0].last_name}
              </p>
              <p>Email: {this.state.users[0].email}</p>
            </div>  :  null
            }</p>
         </div>  
         <div className = "contentImage">
            <img className = "imgContent" src = "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwd29ybGR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt = "contentImage" />
         </div>  
      </div><hr />


      <div className = "content">
         <div className = "contentText">
            <h3>What is happening around the world?</h3>
            <p>What is happening around the world? A highly curated platform for creating, collecting and trading unique NFTs. Trade with confidence on the world's fastest and most secure crypto exchange...</p><br />
            <p>Date: {otherDate.toDateString()}</p>
            <p>{ this.state. users ? 
            <div>
              <p>Author: {this.state.users[1].first_name} {this.state.users[1].last_name}
              </p>
              <p>Email: {this.state.users[1].email}</p>
            </div>  :  null
            }</p>
         </div>  
         <div className = "contentImage">
            <img className = "imgContent" src = "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwd29ybGR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt = "contentImage" />
         </div>  
      </div><hr />


      <div className = "content">
         <div className = "contentText">
            <h3>What is happening around the world?</h3>
            <p>What is happening around the world? A highly curated platform for creating, collecting and trading unique NFTs. Trade with confidence on the world's fastest and most secure crypto exchange...</p><br />
            <p>Date: {anotherDate.toDateString()}</p>
            <p>{ this.state. users ? 
            <div>
              <p>Author: {this.state.users[2].first_name} {this.state.users[2].last_name}
              </p>
              <p>Email: {this.state.users[2].email}</p>
            </div>  :  null
            }</p>
         </div>  
         <div className = "contentImage">
            <img className = "imgContent" src = "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwd29ybGR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt = "contentImage" />
         </div>  
      </div><hr />

      
    </div>
    );
  }
}

export default Content;