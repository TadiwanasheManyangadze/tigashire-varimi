import express from 'express';
import { body, validationResult } from 'express-validator';
import Product from '../models/Product.js';
import { authRequired, adminOnly } from '../utils/auth.js';

const router = express.Router();

// Public
router.get('/', async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json(products);
});

router.get('/:id', async (req, res) => {
  const p = await Product.findById(req.params.id);
  if (!p) return res.status(404).json({ message: 'Not found' });
  res.json(p);
});

// Authenticated CRUD
router.post('/',
  authRequired,
  body('title').notEmpty(),
  body('description').notEmpty(),
  body('price').isFloat({ min: 0 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    const prod = await Product.create(req.body);
    res.status(201).json(prod);
  }
);

router.put('/:id',
  authRequired,
  async (req, res) => {
    const prod = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!prod) return res.status(404).json({ message: 'Not found' });
    res.json(prod);
  }
);

router.delete('/:id',
  authRequired, adminOnly,
  async (req, res) => {
    const prod = await Product.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  }
);

export default router;
