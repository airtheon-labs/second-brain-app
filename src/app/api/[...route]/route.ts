import { Hono } from "hono";
import { handle } from "hono/vercel";

import waitlist from "./waitlist";
import uploadImage from "./upload-image";
import onboard from "./onboard";
import email from "./email";
import awsEmail from "./aws-email";

export const runtime = "edge";

const app = new Hono().basePath("/api");

const routes = app
    .route("/waitlist", waitlist)
    .route("/upload-image", uploadImage)
    .route("/onboard", onboard)
    .route("/email", email)
    .route("/aws-email", awsEmail);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
