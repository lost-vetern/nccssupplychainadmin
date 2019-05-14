import React from 'react';
import './App.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from "react-router-dom";

const MList = props => (
    <GridList spacing={24} cellHeight={180} style={{width: 500,height: '100vh'}}>
    {
        props.items.map((item, index) =>
            <GridListTile key={item+index}>
            <img className={"Image-Fit"} src={"https://clic-ctsa.org/sites/default/files/003-diamond2.png"} alt={item.tradingSymbol} />
            <GridListTileBar
              title={item.tradingSymbol}
              subtitle={<span>{item.description}</span>}
              actionIcon={
                <IconButton style={{color: 'rgba(255, 255, 255, 0.54)'}}>
                  <Link style={{color: 'rgba(255, 255, 255, 0.54)'}} to="/users/"><InfoIcon /></Link>
                </IconButton>
              }
            />
          </GridListTile>
        )
    }
    </GridList>
);

export default MList;