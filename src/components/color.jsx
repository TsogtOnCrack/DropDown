export const Color = ({color}) =>{


    const getTwColor = () =>{
        switch(color){
            case "blue":
                return "bg-blue-500"

            case "red":
                return "bg-red-500"
            case "orange":
                return "bg-orange-500"

            case "green":
                return "bg-green-500"
    }
    
    }

    return <div className={`w-[300px] h-[300px] ${ color !== "none" ? getTwColor() : '' }`}></div>
}