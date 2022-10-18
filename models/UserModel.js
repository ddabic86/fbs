import mongoose from "mongoose";
import validator from "validator";

const slug = require("mongoose-slug-updater");

mongoose.plugin(slug);

const { ObjectId } = mongoose.Schema;

const UserSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "Il nome è richiesto"],
      trim: true,
      text: true,
      minlength: [2, "Il nome deve essere di almeno 2 caratteri"],
      maxlength: [30, "Il nome può essere di massimo 30 caratteri"],
    },
    last_name: {
      type: String,
      required: [true, "Il cognome è richiesto"],
      trim: true,
      text: true,
      minlength: [2, "Il cognome deve essere di almeno 2 caratteri"],
      maxlength: [30, "Il cognome può essere di massimo 30 caratteri"],
    },
    username: {
      type: String,
      required: [true, "Il nome utente è richiesto"],
      trim: true,
      text: true,
      unique: true,
      lowercase: true,
    },

    email: {
      type: String,
      required: [true, "email richiesta"],
      validate: [validator.isEmail, "Inserisci email valida"],
      lowercase: true,
      trim: true,
    },
    slug: {
      type: String,
      slug: ["first_name", "last_name"],
      slugPaddingSize: 1,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password richiesta"],
      select: false,
    },
    picture: {
      type: String,
      trim: true,
      default:
        "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png",
    },
    cover: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      required: [true, "Sesso richiesto"],
      trim: true,
    },
    bYear: {
      type: Number,
      required: true,
      trim: true,
    },
    bMonth: {
      type: Number,
      required: true,
      trim: true,
    },
    bDay: {
      type: Number,
      required: true,
      trim: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    friends: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    requests: {
      type: Array,
      default: [],
    },
    search: [
      {
        user: {
          type: ObjectId,
          ref: "User",
          required: true,
        },
        createdAt: {
          type: Date,
          required: true,
        },
      },
    ],
    details: {
      bio: {
        type: String,
      },
      otherName: {
        type: String,
      },
      job: {
        type: String,
      },
      workplace: {
        type: String,
      },
      highSchool: {
        type: String,
      },
      college: {
        type: String,
      },
      currentCity: {
        type: String,
      },
      hometown: {
        type: String,
      },
      relationship: {
        type: String,
        enum: ["Single", "Relazione", "Congiugato", "Divorziato"],
      },
      instagram: {
        type: String,
      },
    },
    savedPosts: [
      {
        post: {
          type: ObjectId,
          ref: "Post",
        },
        savedAt: {
          type: Date,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", function (next) {
  // Capitalize first_name
  const multiName = this.first_name.split(" ");
  this.first_name = multiName
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");

  // Capitalize last_name
  const multiLastName = this.last_name.split(" ");
  this.last_name = multiLastName
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");

  next();
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
