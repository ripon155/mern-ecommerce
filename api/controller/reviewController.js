const Review = require("./../model/ReviewModel");
const factoey = require("./handlerfactory");

const { createDoc, getAllDoc, getDocById, updateDoc, deleteDoc } = factoey;

exports.addIds = (req, res, next) => {
  if (!req.body.user) req.body.user = req.user._id;
  if (!req.body.product) req.body.product = req.params.productId;
  next();
};

exports.createReview = createDoc(Review);
exports.getAllReview = getAllDoc(Review);
exports.getReviewById = getDocById(Review);

exports.updateReview = updateDoc(Review);
// exports.deleteReview = deleteDoc(Review);

exports.deleteReview = async (req, res, next) => {
  console.log(req.params);
  try {
    if (req.params.id) {
      const d = await Review.findOneAndDelete({ _id: req.params.id });
      console.log(d);
      res.status(200).json({
        message: "Document deleted successfully",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "Faild",
      error: error.message,
    });
  }
};
