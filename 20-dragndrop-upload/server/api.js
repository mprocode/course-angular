var AlbumRoutes    = require("./routes/AlbumRoutes.js");
var PhotosRoutes   = require("./routes/PhotosRoutes.js");
var SharingRoutes  = require("./routes/SharingRoutes.js");
var TimelineRoutes = require("./routes/TimelineRoutes.js");

var router = express.Router();

router.use('/album', AlbumRoutes);
router.use('/photos', PhotosRoutes);
router.use('/sharing', SharingRoutes);
router.use('/timeline', TimelineRoutes);

module.exports = router

