import React, { Component } from 'react';
import MadlibForm from './madlib_form';

export default class App extends Component {
  render() {
    return (
      <div>
      	<div className="backgroundSkew">
        	<div className="madlib-heading">
        		<h1>Dallin's Mad Libs</h1>
        		<div className="madlib-subheading">
        			<p>Fill out the fields below and click the generate button<br/>to see the Mad Lib story.</p>
        		</div>
        	</div>
        	<MadlibForm name="Dallin" />
      	</div>
      </div>
    );
  }
}
