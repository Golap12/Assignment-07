const Table = ({ cooking, handlePrepare }) => {
    return (
        <div className='p-5 flex flex-col justify-center'>
            <h3 className='text-xl font-semibold text-center'>Want to cook: {cooking.length}</h3>
            <div className='border-2 border-dashed mt-3'></div>

            <table className='text-[12px] font-medium text-[#666666] border mt-5'>
                <thead>
                    <tr>
                        <th className='p-2 border-2 bg-yellow-300'>Count</th>
                        <th className='p-2 border-2 bg-teal-200'>Name</th>
                        <th className='p-2 border-2 bg-teal-200'>Time</th>
                        <th className='p-2 border-2 bg-teal-200'>Calories</th>
                        <th className='p-2 border-2 bg-teal-200'>Action</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-100">
                    {
                        cooking.map((item, index) => (
                            <tr key={item.id}>
                                <td className="p-2 border-2 text-center">{index + 1}</td>
                                <td className='p-2 border-2'>{item.recipe_name}</td>
                                <td className='p-2 border-2'>{item.preparing_time} minutes</td>
                                <td className='p-2 border-2'>{item.calories} calories</td>
                                <td className='p-2 border-2 text-center'>
                                    <button onClick={() => handlePrepare(item, item.preparing_time, item.calories, item.id)} className='hover:transition-all hover:bg-gray-400 py-1 px-2 rounded-full bg-green-400 text-[12px] font-medium'>Preparing</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Table;
