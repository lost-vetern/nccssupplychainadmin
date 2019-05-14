import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MList from './List';
import logo from './logo.svg';
import { Link } from "react-router-dom";


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
        <div style={{ padding:20 }}>
            <MList items={this.state.diamonds} />
        </div>
      );
    }
  }

export default DiamondsPage;
