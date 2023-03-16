import dayjs from "dayjs";
import { FaRegAddressCard } from "react-icons/fa";

export function Card({person, ID, ...rest}) {

    const formattedDate = dayjs(person.dob.date).format('DD/MM/YYYY')
    const fullName = `${person.name.title} ${person.name.first} ${person.name.last}`
    
    return(
        <tr  
          className='text-black border-b border-gray-300   '
          {...rest}
        >
                <td className='p-3 py-3'>
                    <span >
                        {fullName}                       
                    </span>
                </td>

                <td className='p-3'>
                    <span>{person.email}</span>
                </td>

                <td className=' p-3'>
                    <span>{formattedDate}</span>
                </td>     

                <td className=' p-3 flex items-center justify-center'>
                    <button className='border bg-cyan-600 text-white font-roboto rounded-lg px-3 py-2 flex items-center gap-2  hover:bg-opacity-80  hover:translate-x-0.5 duration-200' >
                        <FaRegAddressCard size={20} />
                        Ver usuário
                    </button>
                </td>       
        </tr>
            
    )
}
