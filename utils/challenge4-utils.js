

const lookupArtist = {
    'Pyramid Song': 'Radiohead',
};

const downloadTrack = (trackTitle, cb) => {
    setTimeout(() => {
        cb(null, {
            trackID: Math.floor(Math.random() * 100),
            artist: lookupArtist[trackTitle],
            wavFile: `${trackTitle}.WAV`
        })
    }, Math.random() * 1000);
};


const convertWavToMP3 = (wavFile, cb) => {
    if (typeof wavFile !== 'string') return cb({ msg: 'wavFile must be a string' });
    else if (!wavFile.endsWith('WAV')) return cb({ msg: 'File format is incorrect, must have .WAV extension' })
    setTimeout(() => {
        cb(null, `${wavFile.slice(0, -3)}mp3`);
    }, Math.random() * 1000)
};


const saveMP3 = (mp3File, cb) => {
    if (typeof mp3File !== 'string') return cb({ msg: 'wavFile must be a string' });
    else if (!mp3File.endsWith('mp3')) return cb({ msg: 'File format is incorrect, must have .mp3 extension' });
    let percentageComplete = 0;
    const downloadingFile = setInterval(() => {
        console.log(`***** ${percentageComplete}% complete *****`);
        if (percentageComplete === 100) {
            clearInterval(downloadingFile);
            return cb(null, `Successfully saved the file ${mp3File}`)
        };
        percentageComplete += 10;
    }, 100);
};


module.exports = { downloadTrack, convertWavToMP3, saveMP3 };