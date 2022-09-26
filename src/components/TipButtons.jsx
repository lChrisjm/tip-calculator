import { useState } from "react";

const TipButtons = ({ percents, setTipPercent, tipPercentCustom, setTipPercentCustom }) => {
    const handleButtonPercent = (e) =>{
        e.preventDefault();
        setActive(true)
        setTipPercent(Number(e.target.value))

        tipPercentCustom && setTipPercentCustom(false)


    }
    const [active,setActive] = useState(false)

    return (
        <div>
            {percents.map((percent,index) => (
                <button
                    className={`bg-dark-cyan text-white font-bold  text-2xl w-full my-2 py-3 rounded-md  hover:bg-green-light-cyan hover:text-dark-cyan ${active == percent && 'bg-green-light-cyan text-dark-cyan'}` } 
                    value={percent}
                    key = {index}
                    onClick={e => { handleButtonPercent(e), setActive(percent) }}> {percent}%
                </button>
            ))}
        </div>
    )
}

export default TipButtons