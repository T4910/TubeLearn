const SingleChoice = ({title}) => {
  return (
    <div className='flex items-start space-x-5'>
        <input type="checkbox"className='mt-2'/>
        <p className='max-w-[800px] font-sans text-lightGrey'>{title}</p>
    </div>
  )
}

export default SingleChoice