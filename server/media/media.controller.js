const mediaService = require('./media.service');

exports.uploadFile = (req, res) => {
    const filePath = req.file.path;
    mediaService.saveFilePath(filePath)
        .then(() => {
            res.status(200).json({
                message: 'File uploaded successfully.'
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'File upload failed.', 
                error: err
            });
        })
}