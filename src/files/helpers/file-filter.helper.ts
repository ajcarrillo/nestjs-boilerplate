export const fileFilter = (req: Express.Request, file: Express.Multer.File, cb) => {
  if (!file) return cb(new Error("No file received"), false)

  const validMimeTypes = ["image/jpeg", "image/png", "application/pdf"]

  if (validMimeTypes.includes(file.mimetype)) {
    return cb(null, true)
  }

  cb(null, false)
}
