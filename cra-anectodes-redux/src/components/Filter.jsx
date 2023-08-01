

export default function Filter({ handleSubmit, handleBack }) {

  return (
    <div className="mb-10">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className='mr-2' htmlFor='filter'>Search:</label>
        <input className='h-12 my-3 w-full' id='filter' name='filter' />
        <div className="flex justify-evenly">
          <button className='btn-text py-5 w-28 mt-5' type='submit'>Search!</button>
          <button className='btn-text py-5 w-28 mt-5' onClick={(e) => handleBack(e)}>Show all!</button>
        </div>
      </form>
    </div>
  )
}