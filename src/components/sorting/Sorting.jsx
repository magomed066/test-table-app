import React, { useContext, useEffect, useRef } from 'react'
import { TableContext } from '../../contexts'
import styles from './index.module.scss'

const Sorting = React.memo(({ data = [], columns = [] }) => {
	const {
		activeSorting,
		setActiveSorting,
		setActiveFilter,
		activeFilter,
		setActiveCol,
		activeCol,
		inputValue,
		setInputValue,
	} = useContext(TableContext)

	const ref = useRef(null)

	const close = (e) => {
		if (!e.path.includes(ref.current)) {
			setActiveSorting(false)
		}
	}

	useEffect(() => {
		document.body.addEventListener('click', close)
	}, [])

	const selectFilter = (value) => {
		setActiveFilter(value)
	}

	return (
		<div className={styles['sorting']} ref={ref}>
			<div
				className={styles['sorting-field']}
				onClick={() => setActiveSorting((prev) => !prev)}
			>
				<span className={styles['sorting-field__title']}>Сортировка: </span>
				<span className={styles['sorting-field__sort']}>
					{activeFilter && activeCol.label
						? `${activeCol.label} | ${activeFilter}`
						: 'По умолчанию'}
				</span>
			</div>

			<div
				className={`${styles['sorting-lists']} ${
					activeSorting && styles['active']
				}`}
			>
				<div
					className={`${styles['sorting-input']} ${
						activeCol.label && activeFilter ? '' : styles['disabled']
					}`}
				>
					<input
						type="text"
						className={styles['sorting-input__item']}
						placeholder="Введите..."
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						disabled={
							activeCol.name.length && activeFilter.length ? false : true
						}
					/>
					{inputValue.length ? (
						<button
							className={styles['sorting-input__clear']}
							onClick={() => setInputValue('')}
						>
							&times;
						</button>
					) : null}
				</div>

				<div className={styles['sorting-lists-wrap']}>
					<ul className={`${styles['sorting-list']}`}>
						<h3 className={styles['sorting-list__title']}>Столбец</h3>
						{columns.length ? (
							columns.map((item) => (
								<li
									className={`${styles['sorting-list__item']} ${
										activeCol.label === item.label && styles['active']
									}`}
									key={item.id}
									onClick={() =>
										setActiveCol({
											name: item.name,
											label: item.label,
										})
									}
								>
									{item.label}
								</li>
							))
						) : (
							<li className={styles['sorting-list__empty']}>Пусто</li>
						)}
					</ul>

					<ul className={`${styles['sorting-list']}`}>
						<h3 className={styles['sorting-list__title']}>Фильтр</h3>
						{data.length ? (
							data.map((item) => (
								<li
									className={`${styles['sorting-list__item']} ${
										activeFilter === item.value && styles['active']
									}`}
									key={item.id}
									onClick={() => selectFilter(item.value)}
								>
									{item.value}
								</li>
							))
						) : (
							<li className={styles['sorting-list__empty']}>Пусто</li>
						)}
					</ul>
				</div>
			</div>
		</div>
	)
})

export default Sorting
