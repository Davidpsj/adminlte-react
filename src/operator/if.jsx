import React from 'react'

export default function If (props) {
  return props.test === true ? props.children : false
}