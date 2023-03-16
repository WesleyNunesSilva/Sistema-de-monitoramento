import { useState, useEffect } from 'react'

import {BsSortAlphaDown, BsSortAlphaUp} from 'react-icons/bs'

export function HeaderTable({data, setData}) {

  const [sortedListName, setSortedListName] = useState([])
  const [iconSortName, setIconSortName] = useState(false)

  useEffect(() => {
    setSortedListName([...data].sort((a, b) => a.name.first.localeCompare(b.name.first)));
    
  },[data])

  const handleSortName = () => {
    setIconSortName(!iconSortName)
    setData(iconSortName ? sortedListName.reverse() : [...sortedListName])
  }

    return (       
            <thead  className='text-white border border-cyan-700 bg-cyan-600 '>
                <tr >
                    <th className='p-4 relative text-start  '>
                      <span className=''>
                        Nome
                      </span>
                        <button 
                          className='absolute right-4 cursor-pointer' 
                          onClick={handleSortName}
                        >
                          {iconSortName ? <BsSortAlphaUp size={20}/> : <BsSortAlphaDown size={20}/>} 
                        </button>
                        
                    </th>
                    <th className=' border-l border-cyan-700 p-4 text-start '>
                      <span className='  '>
                        Email
                      </span>

                    </th>
                    <th className=' border-r border-l border-cyan-700 p-4 text-start'>
                      <span>ID</span>
                    </th>
                    <th>
                      <span>Actions</span>
                    </th>
                </tr>
            </thead>                 
    )
}
