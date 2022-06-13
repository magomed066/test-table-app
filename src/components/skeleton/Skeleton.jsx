import React from 'react'
import styles from './index.module.scss'

const Skeleton = () => {
	return (
		<div className={styles['skeleton']}>
			<div className={styles['skeleton-top']}>
				<span className={styles['skeleton__item']}></span>
				<span className={styles['skeleton__item']}></span>
				<span className={styles['skeleton__item']}></span>
				<span className={styles['skeleton__item']}></span>
				<span className={styles['skeleton__item']}></span>
			</div>

			<div className={styles['skeleton-footer']}>
				<span className={styles['skeleton__item']}></span>
				<span className={styles['skeleton__item']}></span>
			</div>
		</div>
	)
}

export default Skeleton
