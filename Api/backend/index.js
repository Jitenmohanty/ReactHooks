import express from "express";

const app = express();

const port = process.env.PORT || 3005;

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "table wooden",
      price: 200,
      image: "",
    },
    {
      id: 2,
      name: "table glass",
      price: 250,
      image: "",
    },
    {
      id: 3,
      name: "table plastic",
      price: 250,
      image: "",
    },
    {
      id: 4,
      name: "table wood",
      price: 250,
      image: "",
    },
    {
      id: 5,
      name: "table polyster",
      price: 250,
      image: "",
    },
  ];
  // it was helping out the query params or you can say filter the search

  if (req.query.search) {
    const filterProducts = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(filterProducts);
    return;
  }
  // Manually delay the response
  setTimeout(() => {
    res.send(products);
  }, 3000);
});

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
