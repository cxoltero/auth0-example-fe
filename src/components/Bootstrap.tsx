import {createStyles, Grid, Theme, WithStyles, withStyles} from "@material-ui/core";
import React from "react";
import LoginForm from "./LoginForm";

interface IBootstrapProps extends WithStyles<typeof styles> {

}

const Bootstrap: React.FC<IBootstrapProps> = (props) => {
    const {classes} = props

    return (
        <div className={classes.root}>
            <Grid container={true} spacing={24} justify="center">
                <Grid item={true} xs={10} md={6} lg={4} >
                    <div className={classes.formContainer}>
                        <LoginForm />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}


const styles = (theme: Theme) =>
    createStyles({
        formContainer: {},
        root: {
            paddingTop: '50px'
        },
    })


export default withStyles(styles)(Bootstrap)