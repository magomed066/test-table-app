import { useEffect, useState } from 'react'
import { Table, Skeleton } from '..'
import { TableProvider } from '../../contexts'
import { db, getDocs, collection } from '../../firebase'
import styles from './index.module.scss'

const App = () => {
	const [loading, setLoading] = useState(true)
	const [data, setData] = useState([])
	const [error, setError] = useState(false)

	useEffect(() => {
		const getData = async () => {
			setLoading(true)

			const ref = collection(db, 'data')
			const snap = await getDocs(ref)

			return snap
		}

		return () => {
			getData()
				.then((data) => {
					data.forEach((item) => {
						setData((prev) => [...prev, item.data()])
					})
				})
				.catch((err) => {
					setError(true)
				})
				.finally(() => {
					setLoading(false)
				})
		}
	}, [])

	if (error) {
		return <h1>Something went wrong!</h1>
	}

	return (
		<div className={styles.app}>
			<TableProvider>
				{loading ? <Skeleton /> : <Table pagination={true} data={data} />}
			</TableProvider>
		</div>
	)
}

export default App
