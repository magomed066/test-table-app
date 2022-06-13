import { useCallback, useState } from 'react'

const useSorting = (data = []) => {
	const [sortedItems, setSortedItems] = useState([])

	const sorting = useCallback(
		({ sortKey, reverse }) => {
			if (!sortKey) return data

			const sortedData = [...data].sort((a, b) => {
				return a[sortKey] > b[sortKey] ? 1 : -1
			})

			if (reverse) {
				setSortedItems(sortedData.reverse())
			}

			setSortedItems(sortedData)
		},
		[data],
	)

	return { sortedItems, sorting }
}

export default useSorting
