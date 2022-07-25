import {useState} from 'react'

const useForm = (initialState) => {
    const [form, setForm] = useState({initialState});
    const onChange = (e) => {
      console.log(form)
        const {name, value} = e.target
        setForm({ ...form, [name]: value });
      };
      return {form, onChange}
}

export default useForm