import multer from "multer"


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/temp');
    },
    filename:function(req, file, cb){
       cb(null,file.originalname);
    }
})  // store image in memory

const Multerupload = multer({storage:storage}).single('file');


export {Multerupload};