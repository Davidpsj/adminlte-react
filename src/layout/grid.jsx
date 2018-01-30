import React, { Component } from 'react'

export function toCssClass(numbers) {
  const collumns = numbers.split(' ') || []
  let classAtt = '';

  if(collumns[0]) classAtt += `col-xs-${collumns[0]} `
  if(collumns[1]) classAtt += `col-sm-${collumns[1]} `
  if(collumns[2]) classAtt += `col-md-${collumns[2]} `
  if(collumns[3]) classAtt += `col-lg-${collumns[3]}`

  return classAtt.trim()
}

export default class Grid extends Component {
  toCssClass(numbers) {
    const collumns = numbers.split(' ') || []
    let classAtt = '';

    if(collumns[0]) classAtt += `col-xs-${collumns[0]} `
    if(collumns[1]) classAtt += `col-sm-${collumns[1]} `
    if(collumns[2]) classAtt += `col-md-${collumns[2]} `
    if(collumns[3]) classAtt += `col-lg-${collumns[3]}`

    return classAtt.trim()
  }

  render() {
    return (
      <div className={`${this.toCssClass(this.props.cols)}`}>
        { this.props.children }
      </div>
    )
  }
}