import React, { useState } from 'react'
import TableContext from './TableContext'

const TableProvider = ({ children }) => {
	const [activeSortingPopup, setActiveSortingPopup] = useState(false)
	const [activeFilter, setActiveFilter] = useState('')
	const [activeCol, setActiveCol] = useState({
		name: '',
		label: '',
	})
	const [inputValue, setInputValue] = useState('')
	const [data, setData] = useState([])

	const value = {
		activeSorting: activeSortingPopup,
		setActiveSorting: setActiveSortingPopup,
		activeFilter,
		setActiveFilter,
		activeCol,
		setActiveCol,
		setInputValue,
		data,
		setData,
		inputValue,
	}

	return <TableContext.Provider value={value}>{children}</TableContext.Provider>
}

export default TableProvider
