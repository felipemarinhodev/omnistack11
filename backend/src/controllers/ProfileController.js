const connection = require('../database/connection');

module.exports = {
	async index(request, response) {
		const ong_id = request.headers.authorization;
		if (!ong_id) {
			return response.status(401).json({ error: 'Operation not permitted'});
		}
		const incidents = await connection('incident')
			.where('ong_id', ong_id)
			.select('*');

			return response.json(incidents);
	}
}