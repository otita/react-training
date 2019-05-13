import React from 'react';
import {render} from 'react-dom';
import LongTable from './components/long-table'

class App extends React.Component {
  render () {
    return <LongTable />;
  }
}

render(<App/>, document.getElementById('app'));
