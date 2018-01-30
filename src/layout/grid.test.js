import React from 'react'
import { toCssClass } from './grid'
import jest from 'jest'

describe('Testing Grid', ()=>{
  it('classes should be defined 12, 6, 3, 1', ()=> {
    const classes = toCssClass('12 6 3 1')

    expect(classes).toEqual('col-xs-12 col-sm-6 col-md-3 col-lg-1')
  })
})