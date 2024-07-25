// src/components/Navbar/DrawerContent.tsx
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'antd'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IData, schema } from '../../hooks/useForm'
import UserStore from '../../stores/UserStore'
import { useDrawer } from './useDrawer'

interface DrawerContentProps {
	success: () => void
	error: (e: string) => void
}

const DrawerContent: React.FC<DrawerContentProps> = ({ success, error }) => {
	const { setOpen, handleCancel } = useDrawer()
	const [isLogged, setIsLogged] = useState(false)
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<IData>({
		defaultValues: {
			username: '',
			email: '',
			password: '',
		},
		resolver: zodResolver(schema),
	})

	const onSubmit: SubmitHandler<IData> = data => {
		const errorText = isLogged
			? UserStore.login(data.username, data.email, data.password)
			: UserStore.register(data.username, data.email, data.password)
		if (errorText) {
			error(errorText)
		} else {
			reset()
			handleCancel()
			success()
			setOpen(false)
		}
	}

	return (
		<form className='form' onSubmit={handleSubmit(onSubmit)}>
			<h1 className='action'>{isLogged ? 'Login' : 'Register'}</h1>
			<input type='text' placeholder='username' {...register('username')} />
			{errors.username && <p>{errors.username.message}</p>}
			<input type='text' placeholder='email' {...register('email')} />
			{errors.email && <p>{errors.email.message}</p>}
			<input type='password' placeholder='password' {...register('password')} />
			{errors.password && <p>{errors.password.message}</p>}
			<Button
				type='primary'
				htmlType='submit'
				style={{
					backgroundColor: '#db5ce6',
					borderColor: '#db5ce6',
					fontSize: '16px',
					fontFamily: 'Outfit',
					fontWeight: 'bold',
				}}
			>
				Submit
			</Button>
			<h3 className='change' onClick={() => setIsLogged(!isLogged)}>
				Changle Action
			</h3>
		</form>
	)
}

export default DrawerContent
