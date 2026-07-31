import express from "express";
import auth from "../middleware/auth.js";
import admin from "../middleware/admin.js";
import {
  assingDeliveryPartners,
  createDeliveryPartners,
  getDeliveryPartners,
  updateDeliveryPartners,
} from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.get("/stats", auth, admin);
adminRouter.get("/delivery-partners", auth, admin, getDeliveryPartners);
adminRouter.post("/delivery-partners", auth, admin, createDeliveryPartners);
adminRouter.put("/delivery-partners/:id", auth, admin, updateDeliveryPartners);
adminRouter.put("/order/:id/assing", auth, admin, assingDeliveryPartners);

export default adminRouter;
