import { createStyles, CssBaseline, Theme, WithStyles, withStyles } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import React from 'react'
import './App.css'

import Bootstrap from './components/Bootstrap'
import Header from './components/Header'

interface IAppProps extends WithStyles<typeof styles> {}

class App extends React.Component<IAppProps, {}> {
	public render() {
		const { classes } = this.props

		return (
			<main className={classes.root}>
				<CssBaseline />
				<Header />
				<Bootstrap />
			</main>
		)
	}
}

const styles = (theme: Theme) =>
	createStyles({
		root: {},
		title: {
			color: red.A200,
			fontWeight: 'bold',
		},
	})

export default withStyles(styles)(App)
