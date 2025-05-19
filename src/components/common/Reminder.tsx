import React from 'react'

const Reminder: React.FC = () => {
    return (
        <div className='flex justify-center items-center w-full p-2 bg-orange-600'>
            <span className='text-white text-xl'>
                TOT News - A sua nova newsletter sobre Educação Corporativa!{' '}
                <a href='' className='underline hover:text-orange-100 transition-colors'>
                    Inscreva-se aqui.
                </a>
            </span>
        </div>
    )
}

export default Reminder