import React from 'react'
import Row from './row'

describe('Row test', ()=>{
  it('Row defined', () => {
    const element = <Row />;
    expect(element).toContain('<Unknow><div class="row"></div></Unknow>')
  })
})