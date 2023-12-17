
const Field = ({ name, register, id = name, label, type, options = [], ...rest }) => {
    let input = null;
    switch (type) {
        case 'textarea' : 
            input = <textarea {...rest} id={id} {...register(name)} />;
        break;
        case 'select' : 
            input = <select id={id} {...register(name)}>
                {options.map(s => <option key={s} value={s}>{s}</option>)}
            </select>;
            // input = <Select {...rest} id={id} name="name" {...register(name)}
            //         options={options}
            //     />
        break;
        default: 
            input = <input {...rest} type={type} id={id} {...register(name)} />;

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