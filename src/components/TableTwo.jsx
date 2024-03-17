

const TableTwo = ({ cooked, min, calories }) => {
    return (
        <div>
            <div className='p-5 flex flex-col justify-center'>

                <h3 className='text-xl font-bold text-center'>Currently cooking: {cooked.length}</h3>
                <div className='border-2 border-dashed mt-3'></div>

                <table className='text-[12px] font-medium text-[#666666]  border mt-5 shadow-[0px_20px_20px_10px_#00000024,0px_3px_8px_0px_#00000024,0px_3px_8px_0px_#00000024]'>
                    <thead>
                        <tr>
                            <th className='p-2 border-2 bg-yellow-300'>Count</th>
                            <th className='p-2 border-2 bg-teal-200'>Name</th>
                            <th className='p-2 border-2 bg-teal-200'>Time</th>
                            <th className='p-2 border-2 bg-teal-200'>Calories</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cooked.map((items, index) => (
                                <tr className="bg-gray-100 " key={items.id}>
                                    <td className='p-2 border-2 text-center'>{index + 1}</td>
                                    <td className='p-2 border-2'>{items.recipe_name}</td>
                                    <td className='p-2 border-2'>{items.preparing_time} Minutes</td>
                                    <td className='p-2 border-2'>{items.calories} calories</td>
                                </tr>

                            ))
                        }
                        <tr>
                            <td className='p-2 border-2'></td>
                            <td className='p-2 border-2'></td>
                            <td className='p-2 border-2'>Total Minutes = <span className="font-extrabold text-sm">{min}</span> Min</td>
                            <td className='p-2 border-2'>Total Calories = <span className="font-extrabold text-sm">{calories}</span> Cal</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default TableTwo;