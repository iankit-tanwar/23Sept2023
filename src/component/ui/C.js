import React from 'react'
import D from './D'

export default function C(props) {
  return (
    <>
    <div>C component {props.msg}</div>
    <D msg = {props.msg}></D>
    </>
  )
}
