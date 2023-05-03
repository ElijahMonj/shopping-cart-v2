// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//Shop Items

const shopItems= [
  {
    itemName:"Shirt",
    itemDescription:"White Oversized",
    itemPrice:50
  },
  {
    itemName:"Pants",
    itemDescription:"Black Baggy",
    itemPrice:60
  },
  {
    itemName:"Jacket",
    itemDescription:"Gray Hoodie",
    itemPrice:100
  }
]


export default function handler(req, res) {
  console.log(shopItems)
  res.status(200).json(shopItems)
}
