import multer from 'multer';
import path from 'path'

module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req,file, cb) => {
        let ext = path.extname(file.originalname);
        if(ext !== ".jpg" && ext !== ".jpeg" && ext !==".png" ){
            cb(new Error("file is not supported"), false);
            return;
        }
        cb(null, true);
  
    },
  
  });