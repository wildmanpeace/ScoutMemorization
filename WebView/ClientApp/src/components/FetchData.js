import React, { Component } from 'react';
import {
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableRow, 
  TableContainer, 
  Paper} from "@material-ui/core";

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(forecasts) {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="Weather Forcasts">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Temp. (C)</TableCell>
              <TableCell>Temp. (F)</TableCell>
              <TableCell>Summary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {forecasts.map((row) => (
            <TableRow key={row.date}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.temperatureC}</TableCell>
              <TableCell>{row.temperatureF}</TableCell>
              <TableCell>{row.summary}</TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1 id="tabelLabel" >Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
