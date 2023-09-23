import React from 'react'
import H from './H'

export default function G(props) {
  return (
    <>
    <div>G component{props.msg}</div>
    <H msg={props.msg}></H>
    </>
  )
}
