const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: false,
    },
    verified: {
      type: String,
      enum: ["true", "false"],
      default: false,
    },

    createWith: {
      type: String,
      required: false,
    },

    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
// const userSchema = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: true,
//         },
//         email: {
//             type: String,
//             enum: ['seller', 'buyer', 'admin'],
//             default: 'seller'
//         },
//         password: {
//             type: String,
//             required: false,
//         },
//         verified: {
//             type: String,
//             enum: ['true', 'false'],
//             default: "false"
//         },

//         createWith: {
//             type: String,
//             required: false
//         },

//         image: {
//             type: String,
//             required: false,
//         },

//     },
//     {
//         timestamps: true,
//     }
// );
