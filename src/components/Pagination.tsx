


const Pagination = () => {
    return (
        <div className='p-4 flex justify-between items-center text-gray-600'>
            <button disabled className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">Prev</button>
            <div className="flex items-center gap-2 text-sm">
                <button className="px-2 rounded-md bg-Sky">1</button>
                <button className="px-2 rounded-md ">2</button>
                <button className="px-2 rounded-md ">3</button>
                ...
                <button className="px-2 rounded-md ">10</button>

            </div>
            <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">Next</button>
        </div>
    )
}

export default Pagination