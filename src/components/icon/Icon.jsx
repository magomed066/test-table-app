import React from 'react'
import styles from './index.module.scss'
import Icons from '../../assets/icons.svg'

const Icon = ({ icon = '', width, height, onClick, className }) => {
	return (
		<svg
			className={`${styles['icon']} ${className}`}
			onClick={onClick}
			width={width}
			height={height}
		>
			<use xlinkHref={`${Icons}#${icon}`}></use>
		</svg>
	)
}

export default Icon
