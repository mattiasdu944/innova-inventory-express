


export const uploadImage = (req, res, next) => {
    console.log(req.file);
    res.json({
        path: '/storage/images/'+req.file.filename,
    })
}