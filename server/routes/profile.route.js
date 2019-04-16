const express = require('express');
const profilesController = require('../controllers/profile.controller');
const router = express.Router();

router.get('/test', profilesController.test);

router.get('/profiles', profilesController.getProfiles);

router.post('/profiles/create', profilesController.createProfile);

router.post('/profiles/login', profilesController.login);

router.get('/profiles/email/:email', profilesController.getProfileByEmail);

// router.put('/profiles/:id/update', profilesController.updateProfile);

// router.post('/profiles/:id/delete', profilesController.deleteProfile);

module.exports = router;