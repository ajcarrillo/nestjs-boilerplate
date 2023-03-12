import { createHash } from "crypto"

export const fileNamer = (req: Express.Request, file: Express.Multer.File, cb) => {
  if (!file) return cb(new Error("No file received"), false)

  const { originalname, mimetype } = file
  const fileExtension = mimetype.split("/")[1]
  const fileName = createHash("md5").update(originalname).digest("hex") + "." + fileExtension
  cb(null, fileName)
}
