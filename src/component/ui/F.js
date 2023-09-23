import React from 'react'
import G from './G'

export default function F(props) {
  return (
    <>
    <div>F component {props.msg}</div>
    <G msg = {props.msg}></G>
    </>
  )
}
