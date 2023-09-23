'use client'
import React from 'react'
import B from './B'

export default function A(props) {
    console.log(props.msg)
  return (
    <React.Fragment>

    <div>A Comopnent {props.msg}</div>
    <B msg={props.msg}></B>
    </React.Fragment>
  )
}
