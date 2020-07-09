const db = {
	user: [{ id: '1', name: 'Jymma' }],
};

async function list(tabla) {
	return db[tabla] || [];
}

async function get(tabla, id) {
	let col = await list(tabla);
	return col.filter((item) => item.id === id)[0] || null;
}

async function query(tabla, q) {
	let col = await list(tabla);
	let keys = Object.keys(q);
	let key = keys[0];

	return col.filter((item) => item[keys[0]] === q[key])[0] || null;
}
async function upsert(tabla, data) {
	if (!db[tabla]) {
		db[tabla] = [];
	}

	db[tabla].push(data);

	console.log(db);
}

async function remove(tabla, id) {
	return true;
}

module.exports = {
	list,
	get,
	upsert,
	remove,
	query,
};
