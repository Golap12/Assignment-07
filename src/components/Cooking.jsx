

const Cooking = ({ cooks, handleCook }) => {
    // console.log(cooks);
    return (

        <div className='md:space-y-3 space-y-2 border p-5 rounded-xl shadow-[0px_20px_20px_10px_#00000024,0px_3px_8px_0px_#00000024,0px_3px_8px_0px_#00000024]'>
            <img className='w-[250px] h-[150px] rounded-xl' src={cooks.recipe_image} alt="" />
            <h3 className=' font-semibold text-lg'>{cooks.recipe_name}</h3>
            <p className='text-[14px] font-medium text-[#666666] w-[250px]'>{cooks.short_description}</p>
            <hr />
            <h3 className='font-semibold'>Ingredients: {cooks.ingredients.length}</h3>
            <ul className='text-[#666666] text-[12px] list-disc ml-6'>
                <li>{cooks.ingredients[0]}</li>
                <li>{cooks.ingredients[1]}</li>
                <li>{cooks.ingredients[2]}</li>
                <li>{cooks.ingredients[3]}</li>
                <li>{cooks.ingredients[4]}</li>
                <li>{cooks.ingredients[5]}</li>
            </ul>
            <hr />
            <div className='flex justify-between'>
                <div className='flex gap-2 justify-center items-center text-sm'>
                    <img className='w-[18px] h-[18px]' src="./img/clock.png" alt="" />
                    <p><span>{cooks.preparing_time}</span> minutes</p>
                </div>
                <div className='flex gap-2 justify-center items-center text-sm'>
                    <img className='w-[18px] h-[18px]' src="./img/fire.png" alt="" />
                    <p><span>{cooks.calories}</span> calories</p>
                </div>
            </div>
            <button onClick={() => handleCook(cooks)} className='hover:transition-all hover:bg-gray-400 md:px-5 px-3 md:py-2 py-1 rounded-lg bg-green-400 font-bold text-sm'>Want to Cook</button>
        </div>

    )
}

export default Cooking