import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
      flexGrow: 1,
    },
    appBar:{
        color: ''
    },
    toolBar:{
        margin:'0 auto',
    }
  };

class Nav extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        const { classes } = this.props;

        return (
            <AppBar className={classes.appBar} position="static" color="primary">
                <Toolbar className={classes.toolBar}>
                    <Typography variant="title" color="inherit">
                        smartImage
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Nav);

