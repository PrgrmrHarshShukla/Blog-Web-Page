import React from 'react';

class Background extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
         <div className="image">
          <h1 className="largeText">THE MARKET</h1>
          <img className="bcgImage" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVpbGRpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="skyscrapers" />
         </div>
        );
    }
}

export default Background;