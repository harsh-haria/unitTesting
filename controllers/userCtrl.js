let userList = (req, res) => {
	res.status(200).json({ message: "Hello, World!", number: 123, temp: 35 });
};

let getOtp = () => {
	return new Promise((resolve, reject) => {
		resolve({ otp: 9000 });
	});
};

module.exports = {
	userList,
	getOtp,
};
