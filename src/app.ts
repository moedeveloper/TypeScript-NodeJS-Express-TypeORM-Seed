import * as express from 'express';
import * as bodyParser from "body-parser";

/**
 * Controllers (route handlers).
 */
import * as empController from "./controllers/employee-controller";

/**
 * Create Express server.
 */
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/**
 * Express configuration.
 */
app.set("port", process.env.PORT || 3000);

/**
 * Start Express server.
 */
app.listen(app.get("port"), () => {
  console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
  console.log("  Press CTRL-C to stop\n");
});

/**
 * Primary app routes.
 */
app.get("/GetAllEmployees", empController.getAllEmployees);
app.post("/SaveEmployee", empController.saveEmployee);

module.exports = app;