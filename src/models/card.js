const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  card_id:  Number,
  username: String,
  rating:   Number,
  type: String,
  goal: String,
  nft_card: {
    emoji: String,
    bg_color: String,
    caption: String
  },
  qoutes: {
    aurthur: String,
    qoute: String,
    img: String
  }
});
cardSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
const cardModel = mongoose.model("tbCard", cardSchema);
module.exports = cardModel;