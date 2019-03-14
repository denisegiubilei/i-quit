const mongoose = require('mongoose');
const Profile = require('../models/profile.model');

exports.getProfiles = (req, res) => {
  Profile.find({}, (err, profiles) => {
    if (err) {
      res.send(err);
    }
    res.send(profiles);
  });
};

exports.createProfile = (req, res) => {
  const profile = new Profile(req.body);
  profile.save(err => {
    if (err) {
      res.send(err);
    }
    res.send(profile);
  })
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
  Profile.findById(id , (err, profile) => {
    if (err) {
      res.send(err);
    }
    res.send(profile);
  });
};

exports.updateProfile = (req, res) => {
  const id = new mongoose.Types.ObjectId(req.params.id);
  Profile.findByIdAndUpdate(id, { $set: req.body }, { new: true }, (err, profile) => {
    if (err) {
      res.send(err);
    }
    res.send(profile);
  });
};

exports.deleteProfile = (req, res) => {
  const id = new mongoose.Types.ObjectId(req.params.id.trim());
  console.log(id);
  
  Profile.findByIdAndRemove(id, err => {
      if (err) {
        res.send(err);
      }
      res.send('{"removed" : true}');
  })
};

exports.test = (req, res) => {
  res.send('{"ok" : true}');
}
