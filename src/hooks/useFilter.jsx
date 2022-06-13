import { useContext, useEffect, useState } from 'react'
import { TableContext } from '../contexts'

const useFilter = (data = []) => {
	const { activeCol, activeFilter, inputValue } = useContext(TableContext)
	const [filteredData, setFilteredData] = useState(data)
	const [empty, setEmpty] = useState(false)

	useEffect(() => {
		if (activeCol.name.length && activeFilter.length && inputValue.length) {
			filter(data, inputValue, activeCol)
		}

		if (!inputValue.length) {
			setFilteredData(data)
		}
	}, [inputValue, activeCol, activeFilter])

	const filter = (data, inputValue, activeCol) => {
		let filtered = []

		if (activeFilter === 'Содержит') {
			filtered = [...data].filter((item) => {
				return (
					item[activeCol.name]
						.toString()
						.toLowerCase()
						.indexOf(inputValue.toLowerCase()) > -1
				)
			})
		}

		if (activeFilter === 'Равно') {
			filtered = [...data].filter((item) => {
				return Number(item[activeCol.name]) === Number(inputValue)
			})
		}

		if (activeFilter === 'Больше') {
			filtered = [...data].filter((item) => {
				return Number(item[activeCol.name]) > Number(inputValue)
			})
		}

		if (activeFilter === 'Меньше') {
			filtered = [...data].filter((item) => {
				return Number(item[activeCol.name]) < Number(inputValue)
			})
		}

		if (filtered && filtered?.length) {
			setFilteredData(filtered)
			setEmpty(false)
		} else {
			setFilteredData([])
			setEmpty(true)
		}
	}

	return {
		filteredData,
		empty,
	}
}

export default useFilter
