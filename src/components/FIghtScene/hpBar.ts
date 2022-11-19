import React, { useEffect, useState } from "react";
import { usePrevious } from "../../customHooks/usePrevious";

export function HpBar(currHp: any) {
    const [curHp, setCurHp]  = useState(currHp)

    const [calcValue, setCalcValue] = useState(100)
    const prevHp = usePrevious(currHp)
    const prevCalcValue = usePrevious(calcValue)

    const calc = Math.round((currHp / prevHp) * 100)

    useEffect(() => {
        if (prevHp) {
            const damage = prevHp - currHp

            if (damage) {
                setCalcValue(calc)
            } else {
                return
            }

        }

    })

    // console.log('prevCalcValue:', prevCalcValue);



    return `${calcValue}%`

}