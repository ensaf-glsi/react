import { useController } from "react-hook-form";

const Field = ({ name, control, id = name, label, type, options = [], ...rest }) => {
    const controller = useController({control, name});
    const { field } = controller;
    // console.log('controller ? ', controller);
    let input = null;
    switch (type) {
        case 'textarea' : 
            input = <textarea {...rest} id={id} {...field} />;
        break;
        case 'select' : 
            input = <select id={id} {...field}>
                {options.map(s => <option key={s} value={s}>{s}</option>)}
            </select>;
            // input = <Select {...rest} id={id} name="name" {...methods}
            //         options={options}
            //     />
        break;
        default: 
            input = <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" {...rest} type={type} id={id} {...field} />;
    }
    return (
        <div>
            {label && (
                <div>
                    <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">{label}</label>
                </div>
            )}
            <div>
                {input}
            </div>
        </div>
    )
}

export default Field;