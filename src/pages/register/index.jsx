import { Aside } from '../../components/aside'
import { Input } from '../../components/input'

import { FaArrowLeft } from 'react-icons/fa'

export function Register() {
    return(
        <div className='font-roboto text-gray-500'>
            <Aside />
            <main className='pl-64 mt-10 '>
                <div className='flex items-center gap-3 pl-3'>
                    <button>
                        <FaArrowLeft size={20} />
                    </button>
                    <h2 className='text-xl '>
                        <strong>Listagem/Cadastrar usuário</strong>
                    </h2>

                </div>
                <form action="" className=''>
                    <div className='my-10 '>
                        <div className='grid grid-cols-3 max-sm:flex flex-col items-center '>

                            <Input 
                            type={'text'}
                            label='Name'
                            className='col-span-2  '
                            />

                            <Input 
                            type={'number'}
                            label='CPF/CNPJ'
                            className='col-span-1  '
                            />
                                               
                        </div>

                        <div className='grid grid-cols-3'>

                            <Input 
                            type={'email'}
                            placeholder={'example@email.com'}
                            label='Email'
                            className='col-span-2'
                            />

                            <div className='relative p-2 pr-3 mt-2'>
                                <label 
                                  htmlFor="select-gender"
                                  className='absolute -top-3 text-sm ml-3'
                                >
                                    Gênero
                                </label>
                                <select
                                  id="select-gender"
                                  className='bg-gray-200 p-[14px] w-full rounded-md focus:outline-none focus:ring-1 focus:ring-gray-700  focus:border-gray-700'
                                >
                                    <option value=""></option>
                                    <option value="">Prefiro não informar</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Feminino">Feminino</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </div> 

                        </div>


                        <div className='grid grid-cols-2 grid-rows-2 max-sm:flex flex-col '>
                            
                            <Input 
                                maxlength='11'
                                type={'tel'}
                                label='Tel'
                                
                            />
                                
                            <Input 
                                type={'number'}
                                label='Cell'
                                placeholder={'(xx) xxxxx-xxxx'}
                            />

                            <Input 
                                type={'date'}
                                label='Birth'
                            />

                            <Input 
                                type={'text'}
                                label='Nationality'
                            />

                        </div>
                            <Input 
                                type={'text'}
                                label='Location'
                            />
                    </div>

                    <div className='flex justify-end pr-3'>
                        <button className='px-3 py-2 border bg-cyan-600 text-white rounded-lg hover:bg-opacity-80  hover:translate-x-0.5 duration-500 '>
                            Cadastrar
                        </button>

                    </div>

                    
                </form>
            </main>
        </div>
    )
}