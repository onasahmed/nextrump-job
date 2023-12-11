import React from 'react';

const CommonButton = ({children}) => {
    return (
        <div>
            <button className='w-48 rounded-xl p-4 bg-blue-700 text-white text-xs items-center'>{children}</button>

        </div>
    );
};

export default CommonButton;