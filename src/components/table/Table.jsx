import React, { useState } from 'react'
import { columns, headerData, sortings } from '../../configs/tableConfigs'
import useFilter from '../../hooks/useFilter'
import useSorting from '../../hooks/useSorting'
import Icon from '../icon/Icon'
import Pagination from '../pagination/Pagination'
import Sorting from '../sorting/Sorting'
import styles from './index.module.scss'

const Table = React.memo(({ pagination = false, data = [] }) => {
	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage, setItemsPerPage] = useState(4)
	const [order, setOrder] = useState('ascn')

	const { sortedItems, sorting } = useSorting(data)
	const { filteredData, empty } = useFilter(data)

	// Получаем первый и последний индексы для манипуляции массива
	const indexOfLastEl = currentPage * itemsPerPage
	const indexOfFirstEl = indexOfLastEl - itemsPerPage
	// Получаем эл-ты для текущей страницы
	const currentItems = sortedItems.length
		? sortedItems.slice(indexOfFirstEl, indexOfLastEl)
		: filteredData.slice(indexOfFirstEl, indexOfLastEl)

	console.log(empty)

	return (
		<div className={styles.table}>
			<div className={styles['table-sorting']}>
				<Sorting data={sortings} columns={columns} />
			</div>
			<div className={styles['table-header']}>
				{headerData.map((item) => (
					<div className={styles['table__cell']} key={item.id}>
						{item.name}
						{item.sorting && (
							<Icon
								icon="sort"
								width={15}
								height={15}
								onClick={() => {
									setOrder((prev) => (prev === 'ascn' ? 'desc' : 'ascn'))

									sorting({
										sortKey: item.value,
										reverse: order === 'desc',
									})
								}}
							/>
						)}
					</div>
				))}
			</div>

			<div className={styles['table-body']}>
				{!empty ? (
					currentItems.map((item, i) => (
						<div className={styles['table-row']} key={item.id || i}>
							<div className={styles['table__cell']}>{item.date}</div>
							<div className={styles['table__cell']}>{item.name}</div>
							<div className={styles['table__cell']}>{item.amount}</div>
							<div className={styles['table__cell']}>{item.distance} km</div>
						</div>
					))
				) : (
					<h3 className={styles['empty']}>Ничего не найдено</h3>
				)}
			</div>

			<div className={styles['table-footer']}>
				{pagination ? (
					<Pagination
						items={filteredData}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						itemsPerPage={itemsPerPage}
						setItemsPerPage={setItemsPerPage}
					/>
				) : null}
			</div>
		</div>
	)
})

export default Table
