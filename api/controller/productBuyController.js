const stripe = require("stripe")(process.env.STRIPE_SECRETE_KEY);
// const stripe = require("stripe")(
//   "sk_test_51MU9I7JDs8qLOl2jLFW33J3G4WEiXrofOfu5PfVt74FtVD9OBv3GUYR4pZBlCzXzC4ls0Y1RYDXjO6IfwMPvEvYG00As8YH6rF"
// );
const Product = require("./../model/ProductModel");
const factoey = require("./handlerfactory");
exports.getCheckoutSession = async (req, res, next) => {
  console.log("req.body");
  console.log(req.body);
  try {
    const { data } = req.body;

    const lineItems = data.map((item) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      };
    });

    const product = await Product.findById(req.params.poductId);
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.CLIENT_HOST}/checkout-msg`,
      cancel_url: `${process.env.CLIENT_HOST}`,
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    res.status(400).json({ error });
    console.log(error);
  }
};

{
  /* <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
<stripe-pricing-table pricing-table-id="prctbl_1MXrB6JDs8qLOl2j2n4emAfg"
publishable-key="pk_test_51MU9I7JDs8qLOl2jrKZTjBKSf68WzwRUml239dDICy36tPBJfmIhu6A89YJmDP1s9xrwkOtq9ybJQc1N0FOPCZ7I00HXzMYbt2">
</stripe-pricing-table> */
}
