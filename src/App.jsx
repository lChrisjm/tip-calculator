import { useState } from 'react'
import Total from './components/Total'
import TipButtons from './components/TipButtons'
import { useEffect } from 'react'

function App() {

  const [bill, setBill] = useState(null)
  const [tipPercent, setTipPercent] = useState(0)
  const [tipPercentCustom, setTipPercentCustom] = useState(false)
  const [people, setPeople] = useState(null)

  const [total, setTotal] = useState(null)
  const [totalPerEach, setTotalPerEach] = useState(0)


  const percents = [5, 10, 15, 25,50 ]

  const handleTipPercent = valor => {
    setTipPercentCustom(valor)
    setTipPercent(valor)
  }

  const handleReset = () => {
    setBill(0)
    setTipPercent(5)
    setPeople(0)
    setTipPercentCustom(false)
    setTotal(0)
    setTotalPerEach(0)
  }


  useEffect(() => {
    if (![bill, people].includes(0)) {
      let totalCalc = (bill / 100) * tipPercent

      setTotal(totalCalc)
      setTotalPerEach(totalCalc / people)
    }
  }, [bill, tipPercent, tipPercentCustom, people])


  return (
    <>
      <div className=" h-screen lg:w-full  bg-light-gray-cyan align-text-middle overflow-hidden justify-center align-middle flex flex-col ">
        <div className="header text-center h-20 flex my-8 flex-col align-middle justify-center ">
          <h3 className='text-slate-800 tracking-widest text-3xl font-bold'>SPLI</h3>
          <h3 className='text-slate-800 tracking-widest text-3xl font-bold'>TTER</h3>
        </div>
        <div className=" bg-white p-6 rounded-t-2xl h-full mx-auto  md:h-auto md:flex md:w-1/2 md:gap-x-12  ">
          <form className='md:w-1/2' >
            <div className="mb-4 billContainer">
              <label 
              className='block font-bold my-2  ' 
              htmlFor="bill">Bill</label>
                <input 
                className='w-full px-2 py-3 rounded-md font-bold text-2xl  bg-very-light-gray-cyan text-right focus:ring-transparent focus:outline-none focus:ring focus:ring-teal-500' 
                value={bill} 
                type="number" 
                placeholder='ENTER THE BILL AMOUNT'
                min="1" 
                onChange={e => { setBill(Number(e.target.value)) }} />
            </div>
            <div className="mb-4 tipContainer">
              <label htmlFor="tip" className='font-bold my-2'>Select Tip %</label>
              <div className="container columns-2 md:columns-3">
                <TipButtons percents={percents} setTipPercent={setTipPercent} setTipPercentCustom={setTipPercentCustom} tipPercentCustom={tipPercentCustom} />
                <input 
                className='w-full px-2 py-3 rounded-md font-bold  bg-very-light-gray-cyan text-right text-dark-cyan text-2xl focus:ring-transparent focus:outline-none focus:ring focus:ring-teal-500' 
                value={tipPercentCustom} 
                min="1" 
                type="number" 
                placeholder='CUSTOM'
                onChange={e => { handleTipPercent(Number(e.target.value)) }} />
              </div>
            </div>
            <div className="mb-4 pleopleContainer relative">
              <label className='block font-bold my-2' htmlFor="bill" >Number of People</label>
              <input 
                min="1"  className='w-full font-bold px-2 py-3 rounded-md bg-very-light-gray-cyan text-right text-dark-cyan text-2xl  focus:ring-transparent focus:outline-none focus:ring focus:ring-teal-500' type="number" value={people} onChange={e => { setPeople(Number(e.target.value)) }} />
            </div>
          </form>

          {total ? <Total total={total} totalPerEach={totalPerEach} handleReset={handleReset} /> : <p className='text-center md:w-1/2 mt-4 text-2xl  '>No Data yet</p>}

        </div>
      </div>
    </>
  )
}

export default App
