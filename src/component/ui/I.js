import React from 'react'
import J from './J'

export default function I(props) {
  return (
    <>
    <div>I component {props.msg}</div>
    <J msg= {props.msg}></J>
    </>
  )
}
