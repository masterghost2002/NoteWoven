import multer from "multer";
import path from "path";
import fs from "fs";
const uploadFolder = path.join(__dirname, '../uploads');
const fileSizeLimit = 10485760;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync(uploadFolder))
      fs.mkdirSync(uploadFolder);
    cb(null, uploadFolder);
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: fileSizeLimit },
});
export default upload;
