import React from 'react'
import Curoselslider from './Curoselslider'
import Discount from './Discount'
import Bestsales from"./Bestsales"
import Newarraivals from './Newarraivals'

export default function Home() {
  return (
    <div>
        <Curoselslider/>
        <Discount/>
        <Bestsales/>
        <Newarraivals/>
    </div>
  )
}
