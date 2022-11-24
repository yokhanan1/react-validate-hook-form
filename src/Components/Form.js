import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';

function FormValidation () {

    const {register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <div>

            <Form onSubmit = {handleSubmit(onSubmit)}>

                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First name' type='text' {...register('firstName', {required: true, maxLength: 10})}></input>
                </Form.Field>
                {errors.firstName && <p>Please check the First Name</p>}

                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last name' type='text' {...register('lastName', {required: true, maxLength: 10})}></input>
                </Form.Field>
                {errors.lastName && <p>Please check Last Name</p>}

                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' type='email' {...register('email', {required:true, 
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}></input>
                </Form.Field>
                {errors.email && <p>Please check the Email</p>}

                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' type='password' {...register('password', {required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/})}></input>
                </Form.Field>
                {errors.password && <p>Please check Password</p>}

                <Button type='submit'>Proceed</Button>
                
            </Form>

        </div>
    )
}

export default FormValidation;