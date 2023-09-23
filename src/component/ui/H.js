import React from 'react'
import I from './I'

export default function H(props) {
  return (
    <>
    <div>H component {props.msg}</div>
    <I msg= {props.msg}></I>
    </>
  )
}
