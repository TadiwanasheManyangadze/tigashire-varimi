import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';

dotenv.config();

const products = [
  {
    title: 'Fresh Sweet Corn',
    description: 'Sweet, juicy corn freshly harvested from Chinhoyi fields. Perfect for boiling or grilling.',
    price: 3.5,
    unit: 'kg',
    imageUrl: '/images/sweetcorn.jpg',
    farmerName: 'Tendai Moyo',
    stock: 500,
    category: 'grains'
  },
  {
    title: 'Fresh Tomatoes',
    description: 'Ripe, red tomatoes grown organically near Murehwa. Perfect for salads and cooking.',
    price: 2.0,
    unit: 'kg',
    imageUrl: '/images/freshtomatoes.jpg',
    farmerName: 'Rufaro Chikwanha',
    stock: 300,
    category: 'vegetables'
  },
  {
    title: 'Red Beans',
    description: 'Organic red beans from Gokwe smallholder farmers. Rich in protein and nutrients.',
    price: 4.2,
    unit: 'kg',
    imageUrl: '/images/redbeans.jpg',
    farmerName: 'Tatenda Ndlovu',
    stock: 200,
    category: 'legumes'
  },
  {
    title: 'Free-Range Eggs',
    description: 'Fresh free-range eggs from a cooperative in Masvingo. Rich in omega-3 and protein.',
    price: 6.0,
    unit: 'tray (30)',
    imageUrl: '/images/freerangeeggs.jpg',
    farmerName: 'Nyasha Dube',
    stock: 80,
    category: 'poultry'
  },
  {
    title: 'Fresh Leafy Greens',
    description: 'Mixed greens including covo and rape from Mutare. Packed with vitamins and minerals.',
    price: 1.2,
    unit: 'bunch',
    imageUrl: '/images/freshgreens.jpg',
    farmerName: 'Kudakwashe Mutasa',
    stock: 400,
    category: 'vegetables'
  },
  {
    title: 'Sugar Beans',
    description: 'Premium sugar beans from Midlands Province. High in fiber and protein.',
    price: 4.5,
    unit: 'kg',
    imageUrl: '/images/sugarbeans.jpg',
    farmerName: 'Blessing Chiwenga',
    stock: 150,
    category: 'legumes'
  },
  {
    title: 'Organic Tomatoes',
    description: 'Organic tomatoes grown without pesticides. Sweet and perfect for any dish.',
    price: 2.5,
    unit: 'kg',
    imageUrl: '/images/tomatoes.jpg',
    farmerName: 'Memory Chitambo',
    stock: 250,
    category: 'vegetables'
  },
  {
    title: 'Fresh Maize',
    description: 'Fresh maize from Mashonaland Province. Sweet and tender when cooked.',
    price: 3.0,
    unit: 'kg',
    imageUrl: '/images/maize.jpg',
    farmerName: 'Tafadzwa Marufu',
    stock: 600,
    category: 'grains'
  },
  {
    title: 'Leafy Greens Mix',
    description: 'Fresh leafy greens mix from Eastern Highlands. Rich in iron and vitamins.',
    price: 1.5,
    unit: 'bunch',
    imageUrl: '/images/leafygreens.jpg',
    farmerName: 'Precious Mupfumira',
    stock: 350,
    category: 'vegetables'
  }
];

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('Seeded products:', products.length);
  await mongoose.disconnect();
}

run().catch(e => {
  console.error(e);
  process.exit(1);
});
