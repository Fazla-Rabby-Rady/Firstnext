import React from 'react'

const Layout = ({children}) => {
  return (
    <>
        <div className=" pl-[5rem]">
            <h1 className=' text-7xl font-bold pb-5'>My Works</h1>
            {children}

        </div>
    </>
  )
}

export default Layout