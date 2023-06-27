// @desc get Blogs
// @routes GET/api/blogs
// @access private

const getBlog = (req, res) => {
  res.status(200).json({ message: "get Blogs" });
};

// @desc  Set Blog
// @routes POST /api/blogs
// @access private
const setBlog = (req, res) => {
  res.status(200).send("set");
};

// @desc Update Blog
// @routes PUT /api/blogs:id
// @access private
const updateBlog = (req, res) => {
  res.status(200).send(`update ${req.params.id}`);
};
// @desc Delete Blog
// @routes DELETE /api/blogs:id 

// @access private
const deleteBlog = (req, res) => {
  res.status(200).send(`delete ${req.params.id}`);
};

module.exports = {
  getBlog,setBlog,updateBlog,deleteBlog
};
