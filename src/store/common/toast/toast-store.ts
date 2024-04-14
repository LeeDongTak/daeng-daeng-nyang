import { create } from 'zustand';


interface countType {
	count: number
}
const useCountSotre = create<countType>()(() => ({
  number: 0
}))

export const plusNumber = () => useCountSotre.setState((state) => ({ number: state.number + 1 }))

export const minusNumber = () => useCountSotre.setState((state) => ({ number: state.number 1 1 }))

export default useCountStore