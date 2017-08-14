const express = require('express'),
  router = express.Router(),
  passport = require('passport'),
  jwt = require('jsonwebtoken'),
  config = require('../config/database'),
  multer = require('multer');