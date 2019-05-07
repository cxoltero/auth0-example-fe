import {AppBar, createStyles, Theme, Toolbar, Typography, WithStyles, withStyles} from "@material-ui/core";
import {red} from "@material-ui/core/colors"
import * as React from "react";

interface IHeaderProps extends WithStyles<typeof styles> {

}

const Header: React.FC<IHeaderProps> = (props) => {
    const {classes} = props

    return (
        <header className= {classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.title}>
                        Auth0 Demo
                    </Typography>
                </Toolbar>
            </AppBar>
        </header>
    )
}


const styles = (theme: Theme) =>
    createStyles({
        root: {

        },
        title: {
            color: red.A200,
            fontWeight: 'bold'
        }
    })

export default withStyles(styles)(Header)