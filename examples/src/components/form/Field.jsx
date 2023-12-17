import { useController } from "react-hook-form";

const Field = ({ name, control, id = name, label, type, options = [], ...rest }) => {
    const controller = useController({control, name});
    const { field } = controller;
    console.log('controller ? ', controller);
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
            input = <input {...rest} type={type} id={id} {...field} />;
    }
    return (
        <div>
            {label && (
                <div>
                    <label htmlFor={id}>{label}</label>
                </div>
            )}
            <div>
                {input}
            </div>
        </div>
    )
}

export default Field;