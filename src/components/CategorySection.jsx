import React from 'react'
import ManCategory from '../assets/Images/man.jpeg'
import WomenCategory from '../assets/Images/women.jpg'
import KidCategory from '../assets/Images/kid.jpg'

const CategorySection = () => {
    const Categories=[
        {
            title:'Man',
            imageUrl:ManCategory,
        },
        {
            title:'Women',
            imageUrl:WomenCategory,
        },{
            title:'Kids',
            imageUrl:KidCategory,
        },
    ];
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6'>
      {Categories.map((Category,index)=>(
        <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
            <img src={Category.imageUrl} alt='' className='w-full h-full rounded-lg shadow-md object-cover'/>
            <div className='absolute top-20 left-1'>
                <p className='text-xl font-bold'>{Category.title}</p>
                <p className='text-gray-800'>View All</p>
            </div>
        </div>
      ))}
    </div>
  )
}
export default CategorySection
