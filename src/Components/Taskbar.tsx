import useTime from "../hooks/useTime"

const Taskbar = () => {
    const time = useTime()
    
    return (
        <footer className="fixed bg-linear-to-b inset-shadow-sm inset-shadow-blue-300 from-blue-500 via-blue-600 to-blue-800 bottom-0 left-0 right-0 h-12 flex text-white justify-between items-stretch">
            <div className="right">
                <div className="h-full relative">
                    <div className="bg-linear-to-b w-full h-1/2 from-green-400 via-green-600 via-20% to-green-500 text-center flex min-w-32 rounded-tr-xl">
                        <div className="bg-linear-to-r from-green-600 via-green-700 via-5% to-transparent w-1/2 h-full opacity-50"></div>
                        <div className="bg-linear-to-r from-transparent via-green-700 via-95% to-transparent to-90% w-1/2 h-full opacity-50"></div>
                    </div>
                    <div className="bg-linear-to-b w-full h-1/2 from-green-500 via-green-600 to-green-700 text-center flex min-w-32 font-bold text-xl rounded-br-xl">
                        <div className="bg-linear-to-r from-green-600 via-green-700 via-5% to-transparent w-1/2 h-full opacity-50"></div>
                        <div className="bg-linear-to-r from-transparent via-green-700 via-95% to-transparent to-90% w-1/2 h-full opacity-50"></div>
                    </div>
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-xl">Start</span>
                </div>
            </div>
            <div className="left">
                <div className="bg-linear-to-b from-blue-400 via-blue-500 to-blue-400 min-w-32 flex items-center justify-center h-full rounded-tl-sm rounded-bl-sm  border-2 border-blue-400">
                    <span>{time}</span>
                </div>
            </div>
        </footer>
    )
}

export default Taskbar