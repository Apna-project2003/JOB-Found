import multer from "multer";

//const storage = multer.diskStorage({})

const upload = multer({dest:"uploads/"});

export default upload;
