import { MdSettings } from 'react-icons/md'
import { BsPersonFill } from 'react-icons/bs'

import Logo from '../../assets/logo-sumedical.png'

export function Aside() {
    return(
        <div className=" font-roboto text-gray-600 grid justify-around ">
            <aside className="pt-10 px-3 h-full w-1/6 flex items-center flex-col border border-gray-200 bg-gray-200 shadow-2xl fixed z-10 ">
                <a href="#" className='flex justify-center '>
                    <img src={Logo} alt="foi" className='w-3/4' />
                </a>
                
                <nav>
                    <ul className='grid gap-5 mt-10'>
                        
                        <li className='cursor-auto'>
                            <a href="#">
                                <span className='flex items-center gap-2 hover:text-black w-fit cursor-pointer '>
                                    <BsPersonFill size={20} />
                                    Usuários    
                                </span>
                            </a>        
                        </li>

                        <li>    
                            <a href="">
                                <span className='flex items-center gap-2 hover:text-black'>
                                    <MdSettings size={20} />
                                    Configurações
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div>
    )
}
