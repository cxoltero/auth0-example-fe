import { Button, createStyles, Theme, Typography, withStyles, WithStyles } from '@material-ui/core'
import React, { Component } from 'react'

interface IMainProps extends WithStyles<typeof styles> {
	auth: any
}

class Home extends Component<IMainProps, {}> {
	public render() {
		const { auth, classes } = this.props
		const isAuthenticated = auth.isAuthenticated()

		return (
			<div className={classes.root}>
				{isAuthenticated ? (
					<Typography variant="h4">You are logged in!</Typography>
				) : (
					<Button type="submit" variant="contained" color="default" onClick={this.login}>
						Log In
					</Button>
				)}
			</div>
		)
	}

	private login = () => {
		this.props.auth.login()
	}
}

const styles = (theme: Theme) =>
	createStyles({
		root: {},
	})

export default withStyles(styles)(Home)
