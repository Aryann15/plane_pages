const express = require("express");

const router = express.Router();
const {
  getBlog,
  setBlog,
  updateBlog,
  deleteBlog,
} = require("../controlllers/controller");

router.get("/", getBlog);

router.post("/", setBlog);

router.put("/:id", updateBlog);

router.delete("/:id", deleteBlog);

module.exports = router;