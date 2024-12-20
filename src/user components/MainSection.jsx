import React from 'react'
import At_the_glance from './At_the_glance'
// import Insights from './Insights'
import Order from './Order'

function MainSection() {
  return (
    <>
      <main className='lg:grow overflow-auto'>
        {/* Main Top Section Start */}
        <At_the_glance />
        {/* <Insights/> */}
        <Order/>
        {/* Main Bottom Section End */}
      </main>
    </>
  )
}

export default MainSection