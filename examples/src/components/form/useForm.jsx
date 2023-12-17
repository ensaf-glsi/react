import { useRef, useCallback, useReducer } from 'react';

const useForm = ({ defaultValues = {} }) => {
    const valuesRef = useRef({ ...defaultValues });
    const rerender = useReducer(() => ({}), {})[1]
    const watchAll = useRef(false);
    const subscribers = useRef([]);

    const handleCheckboxChange = useCallback((e) => {
        const { name, value, checked } = e.target;
        let values = valuesRef.current[name] ?? [];
        if (checked && !values.includes(value)) {
            values.push(value);
        } else if (!checked && values.includes(value)) {
            values = values.filter(val => val !== value);
        }
        valuesRef.current[name] = values;
    }, []);

    const onChange = useCallback((e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            handleCheckboxChange(e);
        } else if (type === "radio") {
            valuesRef.current[name] = checked ? value : '';
        } else {
            valuesRef.current[name] = value;
        }
        if (watchAll.current || subscribers.current.includes(name)) {
            rerender();
        }
    }, [handleCheckboxChange, rerender]);

    const register = useCallback((name, options = {}) => {
        return {
            name,
            onChange,
            defaultValue: options.defaultValue ?? valuesRef.current[name]
        };
    }, [onChange]);

    const setValue = useCallback((name, value, options = {}) => {
        valuesRef.current[name] = value;
        rerender();
    }, [rerender]);

    const handleSubmit = useCallback((callback) => (e) => {
        e.preventDefault();
        if (callback && typeof callback === "function") {
            callback(valuesRef.current);
        }
    }, []);

    const watch = useCallback((names) => {
        const currentNames = subscribers.current;
        if (names === undefined) {
            watchAll.current = true;
            return valuesRef.current
        } else if (Array.isArray(names)) {
            const itemsToAdd = names.filter(item => !currentNames.includes(item));
            subscribers.current = currentNames.concat(itemsToAdd);
            return names.map(n => valuesRef.current[n]);
        } else {
            if (!currentNames.includes(names)) {
                currentNames.push(names);
            }
            return valuesRef.current[names];
        }
    }, []);

    return {
        register,
        handleSubmit,
        watch,
        setValue
    };
};

export default useForm;
