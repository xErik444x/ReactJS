import React from 'react';
import { useForm } from 'react-hook-form'


const AddUserForm = (props) => {

    const {register, errors, handleSubmit} = useForm();

    const onsubmit = (data, e) => {
        props.addUser(data); //el add user se trae desde el app.js
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onsubmit)}>
            <label>Name</label>
            <input type="text" name="name" ref={register({required: {value: true, message: 'Valor requerido'}})}/>
            <div>
                {errors?.name?.message}
            </div>
            <label>Username</label>
            <input type="text" name="username" ref={register({required: {value: true, message: 'Valor requerido'}})}/>
            <div>
                {errors?.username?.message}
            </div>
            <button>Add new user</button>
        </form>
        );
}
 
export default AddUserForm;