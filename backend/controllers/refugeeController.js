import asyncHandler from "express-async-handler";
import Refugee from "../models/refugeeModel";
import generateToken from "../utils/generateToken";

// @desc Auth refugee and get token
// @route POST /api/refugees/login
// @access Public
const authRefugee = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const refugee = await Refugee.findOne({ email: email });
  if (refugee && refugee.matchPassword(password)) {
    res.json({
      _id: refugee._id,
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

// @desc    Register a new refugee
// @route   POST /api/refugee
// @acess   Public
const registerRefugee = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const refugeeExists = await Refugee.findOne({ email: email });
  if (refugeeExists) {
    res.status(400);
    throw new Error("Helper already exists");
  }

  const refugee = new Refugee({
    firstName,
    lastName,
    email,
    password,
  });

  await refugee.save();

  if (refugee) {
    res.status(201).json({
      _id: refugee._id,
      firstName: refugee.firstName,
      lastName: refugee.lastName,
      email: refugee.email,
      token: generateToken(refugee._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc get refugee profile
// @route /api/refugees/profile
// @access Private
const getRefugeeProfile = asyncHandler(async (req, res) => {
  const refugee = await Refugee.findById(req.refugee._id);
  const documentArr = [];
  if (refugee.documents) {
    refugee.documents.map((doc) => {
      let obj = {
        link: doc.link,
        name: doc.name,
      };
      documentArr.push(obj);
    });
  }
  res.status(201).json({
    _id: refugee._id,
    firstName: refugee.firstName,
    lastName: refugee.lastName,
    email: refugee.email,
    token: generateToken(refugee._id),
    documents: documentArr,
  });
});

// @desc get all refugees
// @route GET /api/refugees
// @access Private
const getRefugees = asyncHandler(async (req, res) => {
  const refugees = await Refugee.find({});
  const resData = refugees.map((refugee) => {
    return {
      _id: refugee._id,
      firstName: refugee.firstName,
      lastName: refugee.lastName,
      email: refugee.email,
      token: generateToken(refugee._id),
      documents:
        refugee.documents &&
        refugee.documents.map((doc) => {
          return {
            link: doc.link,
            name: doc.name,
          };
        }),
    };
  });
  res.status(201).json(resData);
});

// @desc get refugee by id
// @route GET /api/refugees/:id
// @access Private
const getRefugeeById = asyncHandler(async (req, res) => {
  const refugee = await Refugee.findById(req.params.id).select("-password");
  res.json({
    _id: refugee._id,
    firstName: refugee.firstName,
    lastName: refugee.lastName,
    email: refugee.email,
    token: generateToken(refugee._id),
    documents:
      refugee.documents &&
      refugee.documents.map((doc) => {
        return {
          link: doc.link,
          name: doc.name,
        };
      }),
  });
});

// @desc delete refugee
// @route DELETE /api/refugees/:id
// @access Private
const deleteRefugee = asyncHandler(async (req, res) => {
  const refugee = await Refugee.findByIdAndDelete(req.params.id);

  if (refugee) {
    res.json(refugee);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
  res.json(refugee);
});
