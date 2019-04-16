const mongoose = require("mongoose");
const Profile = require("../models/profile.model");
const keys = require("../config/keys");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

exports.getProfiles = (req, res) => {
  Profile.find({}, (err, profiles) => {
    if (err) {
      res.send(err);
    }
    res.send(profiles);
  });
};

exports.createProfile = (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Profile.findOne({ email: req.body.email }).then(profile => {
    if (profile) {
      return res.status(400).json({ email: "Email already exists" });
    }
  });

  const newProfile = new Profile(req.body);
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newProfile.password, salt, (err, hash) => {
      if (err) throw err;
      newProfile.password = hash;
      newProfile
        .save()
        .then(profile => res.json(profile))
        .catch(err => console.log(err));
    });
  }); 
};

exports.login = (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  
  const email = req.body.email;
  const password = req.body.password;

  console.log(email)
  console.log(password)

  Profile.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name
        };
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 31556926 }, // 1 year
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
              profile: user
            });
          }
        );
      } else {
        return res.status(400).json({ passwordIncorrect: "Password incorrect" });
      }
    });
  });
};

exports.getProfileByEmail = (req, res) => {
  Profile.find({ email: req.params.email }, (err, profiles) => {
    if (err) {
      res.send(err);
    }
    res.send(profiles[0]);
  });
};

exports.getProfilesById = (req, res) => {
  const id = new mongoose.Types.ObjectId(req.params.id);
  Profile.findById(id, (err, profile) => {
    if (err) {
      res.send(err);
    }
    res.send(profile);
  });
};

exports.updateProfile = (req, res) => {
  const id = new mongoose.Types.ObjectId(req.params.id);
  Profile.findByIdAndUpdate(
    id,
    { $set: req.body },
    { new: true },
    (err, profile) => {
      if (err) {
        res.send(err);
      }
      res.send(profile);
    }
  );
};

exports.deleteProfile = (req, res) => {
  const id = new mongoose.Types.ObjectId(req.params.id.trim());
  console.log(id);

  Profile.findByIdAndRemove(id, err => {
    if (err) {
      res.send(err);
    }
    res.send('{"removed" : true}');
  });
};

exports.test = (req, res) => {
  res.send('{"ok" : true}');
};
