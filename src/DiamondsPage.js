import React from 'react';
import './App.css';
import MList from './List';


class DiamondsPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        desc: '',
        diamonds: []
      };
      this._loadAllDiamonds();
    }

    _loadAllDiamonds(){
        fetch('http://51.15.60.180/api/Commodity',{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then( (response) => response.json() )
        .then( (responseJson) => {
            console.log("ALL_DIAMONDS", responseJson);
            this.setState({
                diamonds: responseJson
            });
        })
        .catch( (error) => {
            console.log("ERROR1", error);
        })
    }
  
    render() {
      return (
        <div className="Center-Div" style={{ padding:20, height: '95vh' }}>
            <MList items={this.state.diamonds} />
        </div>
      );
    }
  }

export default DiamondsPage;
