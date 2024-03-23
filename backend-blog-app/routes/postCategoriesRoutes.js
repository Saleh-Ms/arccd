import express from "express";
const router = express.Router();
import { adminGuard, authGuard } from "../middleware/authMiddleware.js";
import {
  createPostCategory,
  deletePostCategory,
  getAllPostCategory,
  updatePostCategory,
} from "../controller/PostCategoriesController.js";
router
  .route("/")
  .post(authGuard, adminGuard, createPostCategory)
  .get(getAllPostCategory);

router
  .route("/:postCategoryId")
  .put(authGuard, adminGuard, updatePostCategory)
  .delete(authGuard, adminGuard, deletePostCategory);

export default router;
