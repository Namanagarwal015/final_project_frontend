import React from 'react'
import Content from '../assets/Content.png'

function Signupnavbar() {
  return (
    <>
      <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 ">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/blogpage" class="flex items-center">
                <img src={Content} class="mr-3 h-6 sm:h-9" alt="Cogoport Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-black">Untitled</span>
            </a>
           
            <em><h3><b>   {'    '}Welcome Readers..Let's start new ride</b></h3></em>
        </div>
    </nav>
</header>
    </>
  )
}

export default Signupnavbar