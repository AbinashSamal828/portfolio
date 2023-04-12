import React from 'react'

const TechCard = (props) => {
    const img=props.img;
    const name=props.name;
  return (
    <div className='w-54 flex flex-col text-center  p-3 m-3 '>
        <div className='w-14 md:w-36 flex justify-center m-2'>
            <img className='w-14 md:w-24' src={img} alt={name} />
        </div>
        <div>
            {name}
        </div>
    </div>
  )
}

export default TechCard