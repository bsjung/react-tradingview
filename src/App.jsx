import * as React from 'react';
import './App.css';
import { TradingView } from './components/TradingView/index';

class App extends React.Component {
	render() {
		return (
			<div className={ 'App' }>
				<header className={ 'App-header' }>
					<h1 className={ 'App-title' }>
						TradingView Charting Library and React Integration Example
					</h1>
				</header>
				<TradingView />
			</div>
		);
	}
}

export default App;
