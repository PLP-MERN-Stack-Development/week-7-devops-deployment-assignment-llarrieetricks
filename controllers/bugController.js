// @desc    Get all bugs
const getBugs = (req, res) => {
  res.send('Get all bugs');
};

// @desc    Create a new bug
const createBug = (req, res) => {
  res.send('Create a new bug');
};

// @desc    Get a single bug
const getBugById = (req, res) => {
  res.send(`Get bug with ID ${req.params.id}`);
};

// @desc    Update a bug
const updateBug = (req, res) => {
  res.send(`Update bug with ID ${req.params.id}`);
};

// @desc    Delete a bug
const deleteBug = (req, res) => {
  res.send(`Delete bug with ID ${req.params.id}`);
};

module.exports = {
  getBugs,
  createBug,
  getBugById,
  updateBug,
  deleteBug,
};
