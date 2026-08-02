import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import authRouter from "./Routes/authRoutes.js";
import productRouter from "./Routes/productRoutes.js";
import uploadrouter from "./Routes/uploadRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";

import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js";
import addressRouter from "./Routes/addressRoutes.js";
import adminRouter from "./Routes/adminRoutes.js";
import deliveryPartnerRoutes from "./Routes/deliveryPartnerRoutes.js";
import { stripeWebHook } from "./controllers/webhook.js";

const app = express();

app.post(
  "/api/stripe",
  express.raw({ type: "application/json" }),
  stripeWebHook,
);

// Middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Server is Live!");
});

app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/upload", uploadrouter);
app.use("/api/orders", orderRouter);
app.use("/api/addresses", addressRouter);
app.use("/api/admin", adminRouter);
app.use("/api/delivery", deliveryPartnerRoutes);

// Set up the "/api/inngest" (recommended) routes with the serve handler
app.use("/api/inngest", serve({ client: inngest, functions }));

// error handeling
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  res.status(500).json({ message: error.message });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
