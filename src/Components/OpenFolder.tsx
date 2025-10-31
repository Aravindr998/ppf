const OpenFolder = ({handleCloseFolder, folderName}: {handleCloseFolder: () => void, folderName: string}) => {
  return (
    <div className='w-full h-full rounded-lg zoom-in-window bg-linear-to-b inset-shadow-sm inset-shadow-blue-300 from-blue-500 via-blue-600 to-blue-800'>
        <div className='bg-transparent text-white flex justify-between items-center p-2 rounded-lg drag-handle cursor-all-scroll h-1/'>
            <p className='font-bold text-md'>{folderName}</p>
            <div className='flex gap-2'>
                <button className='bg-linear-to-b from-blue-400 via-blue-500 to-blue-400 rounded-sm border p-1 min-w-8 font-bold'>_</button>
                <button className='bg-linear-to-b from-red-400 via-red-500 to-red-400 rounded border p-1 min-w-8 font-bold' onClick={handleCloseFolder}>X</button>
            </div>
        </div>
        <div className="bg-transparent w-full px-2 pb-2" style={{
            height: "calc(100% - 52px)"
        }}>
            <div className="bg-white w-full h-full rounded"></div>
        </div>
    </div>
  )
}

export default OpenFolder