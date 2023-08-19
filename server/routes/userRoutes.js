import express from 'express';
import {
  createUser,
  login,
  logout,
  forgotPassword,
  resetPassword,
  isLoggedIn,
  protect,
  updatePassword,
  getUser,
  updateUser,
  deleteUser,
  admin,
  getAllUsers,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/create-user', createUser);
router.post('/login', login);
router.get('/logout', logout);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);

router.get('/check-login', isLoggedIn);

router.use(protect);

router.route('/update-password').patch(updatePassword);

router.route('/').get(getUser).patch(updateUser).delete(deleteUser);

router.route('/all').get(admin, getAllUsers);

export default router;
