const express = require('express');
const router = express.Router();
const {
  getBugs,
  createBug,
  getBugById,
  updateBug,
  deleteBug,
} = require('../controllers/bugController');

router.get('/', getBugs);
router.post('/', createBug);
router.get('/:id', getBugById);
router.put('/:id', updateBug);
router.delete('/:id', deleteBug);

module.exports = router;
