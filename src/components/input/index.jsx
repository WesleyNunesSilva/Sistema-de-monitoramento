export function Input({label, placeholder, type, ...rest}) {
    return (  
      <div className="grid" {...rest}>
        <div className="relative m-2 text-gray-500 pr-1 " >
            <label 
             htmlFor={label} 
             className="absolute -top-3 ml-3 font-roboto text-sm bg-transparent px-1 z-10"
             id={label}            
            >
                {label}
            </label>
            <input
              id={label} 
              type={type}
              placeholder={placeholder}
              className=" form-input rounded-md bg-gray-200 w-full font-roboto p-3 mt-2 focus:outline-none focus:ring-1 focus:ring-gray-700  focus:border-gray-700"              
            />   
        </div>
      </div>
    );
}
