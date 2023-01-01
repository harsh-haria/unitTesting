let userList = (req, res) => {
	res.send("Hello, World!");
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
