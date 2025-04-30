const mongoose = require('mongoose');
const Product = require('./models/Product');
const rawProducts = require('./data/products');

const mongoUri =
"mongodb+srv://aidakavan:bDdm1CLnys7qXkAV@cluster0.meyim.mongodb.net/invoiceApp?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUri)
  .then(async () => {
    console.log('Connected to DB ✅');

    const formattedProducts = rawProducts.map(product => ({
      name: product.name.trim(),
      Pcode: product.Pcode.trim().toLowerCase(),
      category: product.category ? product.category.trim().toLowerCase() : "uncategorized",
      image: product.image || "default.jpg",
      price: Number(product.price) || 0,
      status: "available",
      userId: "662c1f7eb23b430f52c8b4d1", 
      createdAt: new Date(),
      updatedAt: new Date(),
      details: product.details || {}
    }));

    await Product.deleteMany(); // پاکسازی قبلی
    await Product.insertMany(formattedProducts); // ایمپورت با فرمت دلخواه

    console.log('Products imported with formatting 🎯');
    process.exit();
  })
  .catch(error => {
    console.error('Error:', error);
    process.exit(1);
  });

  
  mongoose
    .connect(mongoUri)
    .then(() => {
      console.log("Connected to MongoDB");
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });