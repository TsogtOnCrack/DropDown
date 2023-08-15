import { DownArrow } from "./arrow"
import { useEffect, useState } from "react"


export const Dropdown = ({ dropDownList, innitial = "none", handleClick }) => {

    const [active, setActive] = useState(false)
    const [selected, setSelected] = useState(innitial)
    const [list, setList] = useState([])

    useEffect(() => { // initializing list

        let noneExists = false
        dropDownList.map((el) => {
            if (el == "none" || el == "None") {
                noneExists = true
            }
        })

        if (!noneExists) {
            setList(["none", ...dropDownList])
        } else {
            setList(dropDownList)
        }

    }, [])

    return <div className=" text-white flex flex-col ">

        {/* Drop down that is seen at first */}
        <div onClick={() => {

            if (!active) { setActive(true) } else { setActive(false) }

        }} className={` w-fit cursor-pointer flex flex-row items-center bg-green-400 py-[3px] px-[6px]  shadow-md rounded-t-[5px] ease-out duration-300 ${active ? "" : "rounded-b-[5px] hover:py-[4px] hover:px-[7px]"}`}>

            <p className="mr-2">{selected}</p>
            <DownArrow className="duration-300" width={16} active={active} />

        </div>

        {/* Dropped down part */}
        <div className={` ${!active ? "h-0 w-0 overflow-clip p-0" : "flex overflow-scroll h-fit py-2 px-1"} transition-all duration-300  bg-green-500 max-h-[150px] rounded-b-[5px] flex-col`}>
            {list.map((el) => {

                return <div onClick={() => {
                    if (selected == el) {
                        setSelected("none")
                    } else { setSelected(el) }
                    setActive(false)
                    handleClick(el)
                }} className={`  w-full rounded-[5px] cursor-pointer hover:bg-green-400 px-2 py-1 my-[2px] ${selected == el ? "bg-green-600" : ""}`}>{el}</div>
            })}
        </div>
    </div>
}