import React, {Fragment} from 'react';

import Student from './Student';

class App extends React.Component{
    render(){
        return <Fragment>
              <Student wish="congratulations" name="Rahul"   roll={164509}  marks={90}  />
        
               </Fragment>
    };
};

// now outside the App component


export default App;