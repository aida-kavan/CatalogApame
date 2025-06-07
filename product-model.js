import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productCode: { type: String, required: true },

  productCategory: {
    main: { type: String },
    sub: { type: String },
  },

  productPrice: [
    {
      quantity: { type: Number },
      price: { type: Number },
    },
  ],

  productDescreption: { type: String },
  productColor: [String],

  productImage: { type: String },

  productAttributes: [
    {
      name: { type: String },
      value: { type: String },
    },
  ],

  productVariants: [
    {
      size: { type: mongoose.Schema.Types.mixed },

      attributes: [
        {
          name: { type: String },
          value: { type: String },
        },
      ],
      prices: [
        {
          type: { type: mongoose.Schema.Types.mixed },
          quantity: { type: Number },
          minQty: { type: Number },
          maxQty: { type: Number },
          price: { type: Number },
        },
      ],
    },
  ],

  createdAt: { type: Date, default: Date.now },
});

const ProductItem = mongoose.model("ProductItem", productSchema);
export default ProductItem;
