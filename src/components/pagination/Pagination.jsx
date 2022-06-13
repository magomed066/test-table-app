import React from 'react'
import Icon from '../icon/Icon'
import styles from './index.module.scss'

const Pagination = ({
	items = [],
	currentPage,
	setCurrentPage,
	itemsPerPage,
	setItemsPerPage,
}) => {
	const pages = Math.ceil(items.length / itemsPerPage)

	return (
		<div className={styles['pagination']}>
			<Icon
				width={35}
				height={35}
				icon="left-arrow"
				onClick={() => {
					if (currentPage !== 1) {
						setCurrentPage((prev) => prev - 1)
					}
				}}
			/>

			{Array(pages)
				.fill('')
				.map((item, i) => (
					<div
						className={`${styles['pagination__number']} ${
							i + 1 === currentPage && styles['active']
						}`}
						onClick={() => setCurrentPage(i + 1)}
						key={i}
					>
						{i + 1}
					</div>
				))}

			<Icon
				width={35}
				height={35}
				icon="right-arrow"
				onClick={() => {
					if (currentPage < pages) {
						setCurrentPage((prev) => prev + 1)
					}
				}}
			/>
		</div>
	)
}

export default Pagination
