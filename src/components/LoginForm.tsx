import {Button, Checkbox, createStyles, FormControl, FormControlLabel, Input, InputLabel, Paper, Theme, WithStyles, withStyles} from "@material-ui/core";
import * as React from "react";

interface ILoginFormProps extends WithStyles<typeof styles> {

}

class LoginForm extends React.Component<ILoginFormProps, {}> {
    public render() {
        const {classes} = this.props

        return (
            <Paper className={classes.root}>
                <form className={classes.form}>
                    <FormControl margin="normal" required={true} fullWidth={true}>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input id="email" name="email" autoComplete="email" autoFocus={true} />
                    </FormControl>
                    <FormControl margin="normal" required={true} fullWidth={true}>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input name="password" type="password" id="password" autoComplete="current-password" />
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />

                    <div className={classes.formActions}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign in
                        </Button>
                    </div>

                </form>
            </Paper>
        )
    }
}


const styles = (theme: Theme) =>
    createStyles({
        form: {
            padding: `${theme.spacing.unit * 2}px`
        },
        formActions: {
            display: 'flex',
            justifyContent: 'flex-end'
        },
        root: {},
        submit: {},
    })

export default withStyles(styles)(LoginForm)