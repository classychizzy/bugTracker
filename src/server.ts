import { config } from "dotenv";
import app from "./app";
import errorHandler from "./middlewares/ErrorHandler";
import { logger } from "./utils";

config();

const PORT = process.env.PORT || 5000;

process.on("uncaughtException", (err: Error) => {
  logger.debug(
    err.message,
    err
  );
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");

  process.exit(1);
});

app.use(errorHandler.handle);

process.on("unhandledRejection", async (err: Error) => {
  logger.fatal(
    err.message,
    err
  );
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Server is available at http://localhost:${PORT}`);
});