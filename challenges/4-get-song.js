const {
  downloadTrack,
  convertWavToMP3,
  saveMP3
} = require("../utils/challenge4-utils");

const getSong = (trackTitle, callback) => {
  if (trackTitle.length === 0) callback(null, "");
  else
    downloadTrack(trackTitle, (error, trackDetails) => {
      if (error) callback(error);
      else
        convertWavToMP3(trackDetails.wavFile, (error, convertedTrack) => {
          if (error) callback(error);
          else
            saveMP3(convertedTrack, (error, savedTrack) => {
              if (error) callback(error);
              else callback(null, savedTrack);
            });
        });
    });
};

module.exports = getSong;
