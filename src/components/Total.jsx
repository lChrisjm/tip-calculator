import React from 'react'

const Total = ({ total, totalPerEach, handleReset }) => {
    return (
        <div className='bg-dark-cyan px-6 py-8 rounded-xl md:w-1/2 font-bold flex flex-col md:justify-between'>
            <div>
                <div className="flex flex-row justify-between pb-6">
                    <div className="align-center ">
                        <p className='text-white'>Tip Amount</p>
                        <span className='text-gray-cyan'> / person</span>
                    </div>
                    <div className="column">
                        <p className='text-3xl text-green-light-cyan'>${Math.ceil(totalPerEach)}</p>
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="align-center ">
                        <p className='text-white'>Total</p>
                        <span className='text-gray-cyan'> / person</span>
                    </div>
                    <div className="column">
                        <p className='text-3xl text-green-light-cyan '>${Math.ceil(total)}</p>
                    </div>
                </div>

            </div>
            <button className='bg-green-light-cyan justify-self-end  text-dark-cyan uppercase text-2xl w-full py-3 rounded-md mt-6 hover:bg-teal-200' onClick={handleReset}>reset</button>
        </div>
    )
}

export default Total