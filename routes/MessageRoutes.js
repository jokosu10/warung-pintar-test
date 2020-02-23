// import other routes

const MessageRouter = (app, fs) => {

	// variables
	const dataPath = './data/message.json';

	// created helper method readfile json
	const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
		fs.readFile(filePath, encoding, (err, data) => {
			if (err) {
				throw err;
			}

			callback(returnJson ? JSON.parse(data) : data);
		})
	};

	const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {
		fs.writeFile(filePath, fileData, encoding, (err) => {
			if (err) {
				throw err;
			}

			callback();
		});
	};

	// default route
	app.get('/api/test/message', (req, res) => {
		res.json({
			message: 'Testing to api message warung pintar'
		});
	});

	// get all message
	app.get('/api/message', (req, res) => {
		fs.readFile(dataPath, 'utf8', (err, data) => {
			if (err) {
				throw err;
			}

			res.send(JSON.parse(data));
		});
	});

	// CREATE USERS DATA and saved to JSON
	app.post('/api/message', (req, res) => {
		readFile(data => {
			const newUserId = Object.keys(data).length + 1;

			// add the new user
			data[newUserId.toString()] = req.body;

			writeFile(JSON.stringify(data, null, 2), () => {
				res.status(200).json({
					message: 'Success to add message'
				});
			});
		}, true);
	});

}

module.exports = MessageRouter;