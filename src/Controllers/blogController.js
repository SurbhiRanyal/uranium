const blogModel = require("../Models/blogModel");
const authorModel = require("../Models/authorModel");

// solution POST /blogs
const CreateBlog = async function (req, res) {
  try {
    let blog = req.body;//we receive data as a object {}
    console.log(blog);
    //handling edge cases
    if (Object.keys(blog).length == 0) {   //Object.keys(blog).length = 0 
      return res
        .status(400)
        .send({ status: false, msg: "Provide Blog details" });
    }
    if (!blog.title) { 
      return res
        .status(400)
        .send({ status: false, msg: "Blog title is required" });
    }
    if (Object.keys(blog.title).length == 0 || blog.title.length == 0) { //empty array or empty object
      return res
        .status(400)
        .send({ status: false, msg: "Enter a valid title" });
    }
    if (!blog.body) {
      return res
        .status(400)
        .send({ status: false, msg: "Blog body is required" });
    }
    if (Object.keys(blog.body).length == 0 || blog.body.length == 0) {
      return res.status(401).send({ status: false, msg: "Enter a valid body" });
    }
    let author_id = req.body.authorId;
    if (!author_id) {
      return res
        .status(400)
        .send({ status: false, msg: "First Name is required" });
    }
    if (Object.keys(author_id).length == 0 || author_id.length == 0) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter a valid first name" });
    }

    // console.log(author_id)
    let authorDetail = await authorModel.findById(author_id);
    // console.log(authorDetail)
    if (!authorDetail) {
      return res
        .status(404)
        .send({ status: false, msg: "No Such Author exists" });
    }

    if (!blog.category) {
      return res
        .status(400)
        .send({ status: false, msg: "Blog category is required" });
    }
    if (Object.keys(blog.category).length == 0 || blog.category.length == 0) {
      return res
        .status(401)
        .send({ status: false, msg: "Enter a valid category" });
    }
    // console.log(blog)
    let blogCreate = await blogModel.create(blog);
    res.status(201).send({ status: true, msg: blogCreate });
  } catch (err) {
    // console.log("This is the error 1", err.message)
    res.status(500).send({ status: false, msg: err.message });
  }
};

//GET /blogs
const GetData = async function (req, res) {
  try {
    let query = req.query;//as a object{authorId:surbhi,category:math}

    console.log(query);
    let GetRecord = await blogModel.find({
      $and: [{ isPublished: true, isDeleted: false, ...query }], //authorid:surbhi,category:math
    }).populate("authorId")
    if (GetRecord.length == 0) {
      return res.status(404).send({
        msg: "No such document exist with the given attributes.",
      });
    }
    res.status(200).send({ status: true, msg: GetRecord });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};

const updateBlog = async function (req, res) {
  try {
    const blogId = req.params.blogId; 
    const details = req.body;
    if (!blogId) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a blog id" });
    }
    const isvalidId = await blogModel.find({_id:blogId,isDeleted:false});
    if (isvalidId.length == 0) {
      return res
        .status(401)
        .send({ status: false, msg: "Please enter a valid blogId" });
    }
    if (!details.tags || details.tags.length == 0 || Object.keys(details.tags).length==0) {
      return res.status(400).send({
        status: false,
        msg: "tags  is required to update a blog",
      });
    }
    if (!details.subcategory || details.subcategory.length == 0 || Object.keys(details.subcategory).length==0) {
      return res.status(400).send({
        status: false,
        msg: "subcategory is reqired to update a blog",
      });
    }
    if (details.category || details.authorId){
        return res.status(401).send({
            status: false,
            msg: "You cannot change authorId or category",
        });
    }
    const updatedDetails = await blogModel.findOneAndUpdate(
      { _id: blogId },
      {
        title: details.title,
        body: details.body,
        $push:{
        tags: details.tags,
        subcategory: details.subcategory},
        isPublished: true,
        publishedAt: new Date(),
      },
      { new: true, upsert: true }
    );
    res.status(201).send({ status: true, msg: updatedDetails });
  } catch (err) {
    console.log("This is the error 1", err.message);
    res.status(500).send({ status: false, msg: err.message });
  }
};

//DELETE /blogs/:blogId
const deleteBlog = async function (req, res) {
  try {
    let blogsId = req.params.blogId;
    if (!blogsId) {
      return res
        .status(401)
        .send({ status: false, msg: "Please enter a blogId" });
    }
    //console.log(blogsId)
    let blog = await blogModel.findById(blogsId);
    //Return an error if no user with the given id exists in db
    if (!blog) {
      return res
        .status(404)
        .send({ status: false, msg: "No such Blog exists" });
    }
    if (blog.isDeleted === true) {
      return res
        .status(404)
        .send({ status: false, msg: "Blog already deleted" });
    }
    let deleteBlogs = await blogModel.findOneAndUpdate(
      { _id: blogsId },
      { $set: { isDeleted: true, deletedAt: new Date() } },
      { new: true }
    );
    res.status(200).send({ status: true, data: deleteBlogs });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.massage });
  }
};

//DELETE /blogs?queryParams
const deleteQuery = async function (req, res) {
  try {
    let data = req.query;//as a object //{ body: 'all is well' }
    console.log(data);
    if (Object.keys(data).length == 0) {
      return res
        .status(401)
        .send({ status: false, msg: "enter details for delete blogs" });
    }
    const filterbyquery = await blogModel.find(data);
    if (filterbyquery.length === 0) {
      return res.status(404).send({ status: false, mag: "No Such blogs" });
    }
    let decodedToken = req.decodedToken;//{ authorId: '626831fea06a453051dc3c4d', iat: 1651252153 }
    console.log(decodedToken);
    data.authorId = decodedToken.authorId;//{ body: 'all is well', authorId: '626831fea06a453051dc3c4d' }
    console.log(data);
    let authorBlog = await blogModel.find(data);
    if (Object.keys(authorBlog).length == 0) {
      return res
        .status(401)
        .send({
          status: false,
          msg: "no such blogs found with your provided details authorized with your login credentials ",
        });
    }
    console.log(authorBlog);
    data.isDeleted = false;
    console.log(data);//{body: 'all is well',authorId: '626833cda06a453051dc3c53',isDeleted: false}

    const deleteDetails = await blogModel.updateMany(
      data,
      { $set: { isDeleted: true, deletedAt: new Date() } },
      { new: true }
    );
    if(deleteDetails.modifiedCount==0){
        return res.status(404).send({status:false,msg:"Blog already deleted"})
    }
    // console.log(deleteDetails)
    res.status(201).send({ status: true, msg: deleteDetails });
  } catch (err) {
    console.log("This is the error 1", err.massage);
    res.status(500).send({ status: false, msg: err.massage });
  }
};
module.exports.CreateBlog = CreateBlog;
module.exports.updateBlog = updateBlog;
module.exports.deleteBlog = deleteBlog;
module.exports.deleteQuery = deleteQuery;
module.exports.GetData = GetData;
