import React from 'react';
import './App.css';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

const MList = props => (
    <List>
    {
        props.items.map((item, index) =>
            <ListItem key={index}>
                <ListItemText style={{backgroundColor: 'red', }} primary={item.tradingSymbol} />
            </ListItem>
        )
    }
    </List>
);

export default MList;