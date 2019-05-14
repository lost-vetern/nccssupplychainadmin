import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MList from './List';


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        desc: '',
        diamonds: []
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this._loadAllDiamonds();
    }
  
    handleSubmit(event) {
        fetch('http://51.15.60.180/api/Commodity', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              $class: 'org.example.mynetwork.Commodity',
              tradingSymbol: this.state.name,
              description: this.state.desc,
              mainExchange: 'Dollar',
              quantity: '1',
              owner: 'resource:org.example.mynetwork.Trader#procurement',
            })
        })
        .then( (response) => response.json() )
        .then((resp)=>{
            console.log(resp);
            this.setState(prevState => ({
                diamonds: [...prevState.diamonds, resp],
                name: '',
                desc: ''
            }));
        })
        .catch((err)=>{
            console.log(err);
        });
        event.preventDefault();
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
            <Grid
            style={{ height: '90vh' }}
            spacing={24}
            container
            direction="column"
            justify="center"
            alignItems="center">
                <h1>Add new diamond</h1>
                <Grid
                spacing={24}
                container
                direction="row"
                justify="center"
                alignItems="center"
                >
                <Grid item>
                    <OutlinedInput
                        value={this.state.name}
                        onChange={(text)=> this.setState({name: text.target.value})} 
                        labelWidth={10}  
                        placeholder={"Name"} 
                    />
                </Grid>

                <Grid item>
                    <OutlinedInput
                        value={this.state.desc}
                        onChange={(text)=> this.setState({desc: text.target.value})} 
                        labelWidth={10} 
                        placeholder={"Description"} 
                    />
                </Grid>

                <Grid item>
                    <Button onClick={this.handleSubmit} variant="contained" color="primary" >
                        Add
                    </Button>
                </Grid>
                </Grid>
                
            </Grid>
            <div className="Center-Div">
                <a className="No-Underline" style={{marginTop: '50', color: '#3f51b5'}} href="http://www.google.com"><h2>List all diamonds</h2></a>
            </div>
            {/* <MList items={this.state.diamonds} /> */}
        </div>
      );
    }
  }

export default App;
