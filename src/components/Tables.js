import React from 'react'

const Tables = ({list}) => {
  return (
    <>
    <table width='100%' className='mb-10'>
        <thead className='bg-gray-200 p-1'>
                        <tr>
                        <td className='font-bold'>Description</td>
                        <td className='font-bold'>Quantity</td>
                        <td className='font-bold'>Price</td>
                        <td className='font-bold'>Amount</td>
                        </tr>
                    </thead>
            {list.map(({id,description,quantity,price,amount})=>(
                <React.Fragment key={id}>
                    <tbody>
                        <tr>
                            <td>{description}</td>
                            <td>{quantity}</td>
                            <td>{price}</td>
                            <td>{amount}</td>
                        </tr>
                    </tbody>
                </React.Fragment>
            ))}
        </table>
    </>
  )
}

export default Tables
