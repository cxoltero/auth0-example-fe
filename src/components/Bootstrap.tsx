import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core'
import React from 'react'
import { Route, Router } from 'react-router'
import history from '../history'

import Auth from '../services/AuthService'
import Callback from './Callback'
import Home from './Home'
import Main from './Main'

interface IBootstrapProps extends WithStyles<typeof styles> {}

const auth = new Auth()

const handleAuthentication = (nextState: any, replace?: any) => {
	if (/access_token|id_token|error/.test(nextState.location.hash)) {
		auth.handleAuthentication()
	}
}

class Bootstrap extends React.Component<IBootstrapProps, {}> {
	public render() {
		const { classes } = this.props

		return (
			<div className={classes.root}>
				<Router history={history}>
					<div>
						<Route exact={true} path="/" render={(p) => <Main auth={auth} />} />
						<Route exact={true} path="/home" render={(p) => <Home auth={auth} />} />
						<Route
							path="/callback"
							render={(props) => {
								handleAuthentication(props)

								return <Callback {...props} />
							}}
						/>
					</div>
				</Router>
			</div>
		)
	}
}

const styles = (theme: Theme) =>
	createStyles({
		formContainer: {},
		root: {
			paddingTop: '50px',
		},
	})

export default withStyles(styles)(Bootstrap)
