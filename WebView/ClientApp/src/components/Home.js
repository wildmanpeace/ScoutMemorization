import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Hello, Scouts!</h1>
        <p>This website was built with the intention of helping scouts young and old memorize the many things that we Scouts need to learn.
          you will find many fun games to help you memorize the various sayings. They include the Scout Oath, Scout Law, Outdoor Code, and Leave No Trace.
        </p>

        <br />

        <p>
          Select one of the options above to get started. 
        </p>

      </div>
    );
  }
}
