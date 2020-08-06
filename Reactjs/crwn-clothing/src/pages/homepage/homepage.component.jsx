import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <Directory />
    </div>    
)

export default HomePage;

// testing
/*
class HomePage extends React.Component {
    constructor(){
        super();
        this.state = {
            val : 0
        };
    }

    componentDidMount(){
        this.setState({
            val : this.state.val + 1
        });
        console.log(this.state.val);

        this.setState({
            val : this.state.val + 1
        });
        console.log(this.state.val);

        setTimeout(()=>{
            this.setState({
                val : this.state.val + 1
            });
            console.log(this.state.val);

            this.setState({
                val : this.state.val + 1
            });
            console.log(this.state.val);
        },0);
    }

    render(){
        return null;
    }
}

export default HomePage;
*/