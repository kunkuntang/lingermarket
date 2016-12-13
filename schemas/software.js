var selector = require('../databaise/Software');

var softwares = [];

function fetchAll(cb) {


	selector.selectAll(function (softwareDatas) {
		softwares = [];
		if(softwareDatas){
			for(var i = 0; i < softwareDatas.length; i++){
				softwares.push({
					_id: softwareDatas[i]._id,
					title: softwareDatas[i].title || null,
					company: softwareDatas[i].company || null,
					summary: softwareDatas[i].summary || null,
					poster: softwareDatas[i].poster || null,
					year: softwareDatas[i].year || null,
					downloadLink: softwareDatas[i].downloadLink || null
				});
			}
		}
		cb(softwares);
	});
}

function fetchById(id, cb) {
	var software = null;
	console.log("id:" + id)

	selector.selectOne(id, function (softwareData) {
		software = {
			id: id,
			title: softwareData.title || null,
			company: softwareData.company || null,
			summary: softwareData.summary || null,
			downloadLink: softwareData.downloadLink || null,
			poster: softwareData.poster || null,
			year: softwareData.year || null,
		};

		console.log("production: "+software.id)
		cb(software);
	})
}

/*
var MovieSchema = new MovieModel({
	doctor: String,
	title: String,
	language: String,
	conpany: String,
	summary: String,
	video: String,
	poster: String,
	year: Number,
	createAt: Date.now(),
	updateAt: Date.now()
});
*/

function addSoftware(software, cb) {
	selector.addSoftware([
		software.title,
		software.company,
		software.year,
		software.summary,
		software.poster,
		software.downloadLink
	], cb);
}

function upadteSoftware(software, cb) {
	selector.updateSoftware(software.id, [
		software.title,
		software.company,
		software.year,
		software.summary,
		software.poster,
		software.downloadLink
	], cb)
}

function deleteSoftware(id, cb) {
	selector.deletSoftware(id, cb);
}


module.exports = {
	fetchAll: fetchAll,
	fetchById: fetchById,
	addSoftware: addSoftware,
	upadteSoftware: upadteSoftware,
	deleteSoftware: deleteSoftware
}