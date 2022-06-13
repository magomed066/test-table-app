const data = [
	{ id: 1, date: '12.12.2022', name: 'Apple', amount: 12, distance: 1300 },
	{ id: 2, date: '04.05.2021', name: 'Samsung', amount: 15, distance: 1500 },
	{ id: 3, date: '06.09.2021', name: 'Xioami', amount: 16, distance: 1700 },
	{ id: 4, date: '12.17.2021', name: 'Nokia', amount: 18, distance: 8200 },
	{ id: 5, date: '03.20.2022', name: 'Xerox', amount: 19, distance: 1200 },
	{ id: 6, date: '07.25.2021', name: 'Lada', amount: 16, distance: 4200 },
	{ id: 7, date: '06.04.2021', name: 'BWM', amount: 112, distance: 6200 },
	{ id: 8, date: '10.02.2022', name: 'Mercedes', amount: 121, distance: 3200 },
	{ id: 9, date: '11.01.2022', name: 'Vaz', amount: 151, distance: 10200 },
	{
		id: 10,
		date: '11.01.2022',
		name: 'Microsoft',
		amount: 151,
		distance: 10200,
	},
	{ id: 11, date: '11.01.2022', name: 'Hummer', amount: 151, distance: 10200 },
]

const sortings = [
	{ id: 1, value: 'Равно', columns: ['amount', 'distance'] },
	{ id: 2, value: 'Содержит', columns: ['name'] },
	{ id: 3, value: 'Больше', columns: ['amount', 'distance'] },
	{ id: 4, value: 'Меньше', columns: ['amount', 'distance'] },
]
const columns = [
	{ id: 1, label: 'Название', name: 'name' },
	{ id: 2, label: 'Количество', name: 'amount' },
	{ id: 3, label: 'Расстояние', name: 'distance' },
]

const headerData = [
	{
		id: 1,
		name: 'Дата',
		value: 'date',
		sorting: false,
	},
	{
		id: 2,
		name: 'Название',
		value: 'name',
		sorting: true,
	},
	{
		id: 3,
		name: 'Количество',
		value: 'amount',
		sorting: true,
	},
	{
		id: 4,
		name: 'Дистанция',
		value: 'distance',
		sorting: true,
	},
]

export { sortings, headerData, columns, data }
