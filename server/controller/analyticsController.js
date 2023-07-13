const { mongoose } = require("mongoose");
const inventoryModel = require("../models/inventoryModel");

const bloodGroupDetailsController = async (req, res) => {
	try {
		const bloodGroups = ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"];
		const bloodGroupData = [];
        const organisation = new mongoose.Types.ObjectId(req.body.userId);
        // get single blood Group data
		
		await Promise.all(
			bloodGroups.map(async (bloodGroup) => {
			//COunt TOTAL IN
			const totalIn = await inventoryModel.aggregate([
				{
					$match: {
						bloodGroup: bloodGroup,
						inventoryType: "in",
						organisation,
					},
				},
				{
					$group: {
						_id: null,
						total: { $sum: "$quantity" },
					},
				},
			]);
			//COunt TOTAL OUT
			const totalOut = await inventoryModel.aggregate([
				{
					$match: {
						bloodGroup: bloodGroup,
						inventoryType: "out",
						organisation,
					},
				},
				{
					$group: {
						_id: null,
						total: { $sum: "$quantity" },
					},
				},
			]);
			//CALCULATE TOTAL
			const availabeBlood =
				(totalIn[0]?.total || 0) - (totalOut[0]?.total || 0);

			//PUSH DATA
			bloodGroupData.push({
				bloodGroup,
				totalIn: totalIn[0]?.total || 0,
				totalOut: totalOut[0]?.total || 0,
				availabeBlood,
			});
		}));
        return res.status(200).send({
            success:true,
            message: "blood Group data fetch successfully " ,
            bloodGroupData

        })
	} catch (error) {
		console.log(error);
		return res.status(500).send({
			success: false,
			message: "Error occured in blood Group data analytics Api ",
            error

		});
	}
};

module.exports = { bloodGroupDetailsController };
