
import React from 'react';
import {Component} from 'react';

class MakeLists extends React.Component{
  render(){
    return(
      <option Value={this.props.value},Text={this.props.key}>
      </option>
    )
  }
}
export default MakeLists;
