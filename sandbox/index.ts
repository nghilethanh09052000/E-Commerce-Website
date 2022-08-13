import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {

	await client.hSet('car1', {
		color: 'red',
		year: 1950
	});

	await client.hSet('car2', {
		color: 'green',
		year: 1951
	});

	await client.hSet('car3', {
		color: 'blue',
		year: 1952
	});

	const results = await Promise.all([
		client.hGetAll('car1'),
		client.hGetAll('car2'),
		client.hGetAll('car3')
	])

	console.log(results);
	// const car = await client.hGetAll('car');

	// if (Object.keys(car).length === 0) {
	// 	console.log('Car not found, respond with 404');
	// 	return;
	// }

	// console.log(car);
};
run();
