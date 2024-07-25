// src/components/Navbar/useDrawer.ts
import { useState } from 'react'

export const useDrawer = () => {
	const [open, setOpen] = useState(false)
	const [confirmLoading, setConfirmLoading] = useState(false)

	const showDrawer = () => setOpen(true)
	const handleOk = () => {
		setConfirmLoading(true)
		setTimeout(() => {
			setOpen(false)
			setConfirmLoading(false)
		}, 300)
	}
	const handleCancel = () => setOpen(false)

	return { open, showDrawer, handleOk, handleCancel, confirmLoading, setOpen }
}
