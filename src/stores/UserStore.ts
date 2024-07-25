import { makeAutoObservable } from 'mobx'

interface IUser {
	name: string
	email: string
	password: string
}
interface ICart {
	id: number
	quantity: number
}

class UserStore {
	public currentUser: IUser | null = null
	public users: IUser[] = []
	public cart: ICart[] = []

	public constructor() {
		makeAutoObservable(this)
		this.loadUsers()
		this.loadCart()
	}

	//parsing
	private loadUsers() {
		const users = localStorage.getItem('users')
		if (users) {
			this.users = JSON.parse(users)
		}
		const currentUser = localStorage.getItem('currentUser')
		if (currentUser) {
			this.currentUser = JSON.parse(currentUser)
		}
	}
	private loadCart() {
		const currentUserEmail = this.currentUser?.email
		if (currentUserEmail) {
			const cart = localStorage.getItem(`cart-${currentUserEmail}`)
			if (cart) {
				this.cart = JSON.parse(cart)
			}
		} else {
			this.cart = []
		}
	}
	//Saving
	private saveUsers() {
		localStorage.setItem('users', JSON.stringify(this.users))
	}
	private saveCart() {
		const currentUserEmail = this.currentUser?.email
		if (currentUserEmail) {
			localStorage.setItem(
				`cart-${currentUserEmail}`,
				JSON.stringify(this.cart)
			)
		}
	}

	register(name: string, email: string, password: string) {
		const existingUser = this.users.find(u => u.email === email)
		if (existingUser) {
			return 'User already exists'
		}
		const newUser: IUser = { name, email, password }
		this.users.push(newUser)
		this.saveUsers()
		this.currentUser = newUser
		localStorage.setItem('currentUser', JSON.stringify(newUser))
		this.loadCart()
		return ''
	}

	login(name: string, email: string, password: string) {
		const existingUser = this.users.find(
			u => u.email === email && u.password === password && u.name === name
		)
		if (!existingUser) {
			return 'Invalid credentials'
		}
		this.currentUser = { name, email, password }
		localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
		this.loadCart()
		return ''
	}
	logout() {
		this.currentUser = null
		this.cart = []
		localStorage.removeItem('currentUser')
	}
	addToCart(id: number) {
		if (this.currentUser) {
			const itemIndex = this.cart.findIndex(item => item.id === id)
			if (itemIndex >= 0) {
				this.cart[itemIndex].quantity += 1
			} else {
				this.cart.push({ id, quantity: 1 })
			}
			this.saveCart()
		}
	}
	clearCart() {
		this.cart = []
		this.saveCart()
	}
	removeFromCart(id: number) {
		const itemIndex = this.cart.findIndex(item => item.id === id)

		if (itemIndex >= 0) {
			const item = this.cart[itemIndex]

			if (item.quantity > 1) {
				this.cart[itemIndex] = { ...item, quantity: item.quantity - 1 }
			} else {
				this.cart.splice(itemIndex, 1)
			}

			this.saveCart()
		}
	}
	get Cart() {
		return this.cart
	}
	get totalItems() {
		return this.cart.reduce((sum, item) => sum + item.quantity, 0)
	}
}

export default new UserStore()
