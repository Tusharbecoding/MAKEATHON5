import asyncHandler from "express-async-handler";
import Helper from "../models/helperModel.js";
import generateToken from "../utils/generateToken.js";

// @desc Auth helper and get token
// @route POST /api/helpers/login
// @access Public
const authHelper = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const helper = await Helper.findOne({ email: email });

  if (helper && (await helper.matchPassword(password))) {
    res.json({
      _id: helper._id,
      firstName: helper.firstName,
      lastName: helper.lastName,
      email: helper.email,
      imageUrl: helper.imageUrl,
      token: generateToken(helper._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
});

// @desc    Register a new helper
// @route   POST /api/helper
// @acess   Public
const registerHelper = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const helperExists = await Helper.findOne({ email: email });

  if (helperExists) {
    res.status(400);
    throw new Error("Helper already exists");
  }

  const helper = new Helper({
    firstName,
    lastName,
    email,
    password,
  });

  await helper.save();

  if (helper) {
    res.status(201).json({
      _id: helper._id,
      firstName: helper.firstName,
      lastName: helper.lastName,
      email: helper.email,
      token: generateToken(helper._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    get helper profile
// @route   GET /api/helpers/profile
// @acess   Private
const getHelperProfile = asyncHandler(async (req, res) => {
  const helper = await Helper.findById(req.helper._id);

  //   const campCreated = [];
  //   helper.campaignsCreated.map((x) => {
  //     let obj = {};
  //   });

  if (helper) {
    res.json({
      _id: helper._id,
      firstName: helper.firstName,
      lastName: helper.lastName,
      email: helper.email,
      imageUrl: helper.imageUrl,
      //   campaignsCreated:
    });
  } else {
    res.status(200);
    throw new Error("Not found");
  }
});

// @desc get all helpers
// @route GET /api/helpers
// @access Private
const getHelpers = asyncHandler(async (req, res) => {
  const helpers = await Helper.find({});
  res.json(
    helpers.map((helper) => {
      return {
        _id: helper._id,
        firstName: helper.firstName,
        lastName: helper.lastName,
        email: helper.email,
        imageUrl: helper.imageUrl,
      };
    })
  );
});

// @desc get helper by id
// @route GET /api/helpers/:id
// @access Private
const getHelperById = asyncHandler(async (req, res) => {
  const helper = await Helper.findById(req.params.id).select("-password");
  res.json({
    _id: helper._id,
    firstName: helper.firstName,
    lastName: helper.lastName,
    email: helper.email,
    imageUrl: helper.imageUrl,
  });
});

// @desc update helper
// @route PUT /api/helpers/:id
// @access Private
const updateHelper = asyncHandler(async (req, res) => {
  const helper = await Helper.findById(req.params.id);

  if (helper) {
    helper.firstName = req.body.firstName || helper.firstName;
    helper.lasttName = req.body.firstName || helper.lastName;
    helper.email = req.body.email || helper.email;
    helper.imageUrl = req.body.imageUrl;
    const updatedHelper = await helper.save();

    res.json({
      _id: updatedHelper._id,
      firstName: updatedHelper.firstName,
      lastName: updatedHelper.lastName,
      email: updatedHelper.email,
      imageUrl: updatedHelper.imageUrl,
    });
  } else {
    res.status(404);
    throw new Error("Helper not found");
  }
});

// @desc Delete Helper
// @route DELETE /api/helpers/:id
// @access Private
const deleteHelper = asyncHandler(async (req, res) => {
  const helper = await Helper.findByIdAndDelete(req.params.id);

  if (helper) {
    res.json(helper);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
  res.json(helper);
});
