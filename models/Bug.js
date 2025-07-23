const Bug = require('../models/Bug');

// @desc    Get all bugs
// @route   GET /api/bugs
// @access  Public
const getBugs = async (req, res) => {
  const bugs = await Bug.find();
  res.json(bugs);
};

// @desc    Create a bug
// @route   POST /api/bugs
// @access  Public
const createBug = async (req, res) => {
  const { title, description, priority, status } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }

  const newBug = await Bug.create({
    title,
    description,
    priority,
    status,
  });

  res.status(201).json(newBug);
};

module.exports = {
  getBugs,
  createBug,
};
