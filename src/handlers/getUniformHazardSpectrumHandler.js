const getUniformHazardSpectrum = require("../controllers/getUniformHazardSpectrum");

const getUniformHazardSpectrumHandler = async (req, res) => {
  let { lat, long, location, tr } = req.query;

  try {
    if (!lat || !long || !location || !tr) throw { status: 400, message: "Missed location or tr" };
    if (+tr > 10000) throw { status: 400, message: "The return time cannot exceed 10,000 years" };
    
    lat = parseInt(lat * 10) / 10;
    long = parseInt(long * 10) / 10;

    const response = await getUniformHazardSpectrum(lat, long, location, tr);

    if (!response) throw {status: 404, message: "There is no information in the DB with this location or 'tr'"};

    const result = {
      status: "success",
      data: response.sort((a,b) => +a.x - +b.x),
      total: response.length
    }; //response format for current front with jquery

    return res.status(200).json(result);
    
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = getUniformHazardSpectrumHandler;
