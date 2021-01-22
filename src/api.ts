import app from "./app"
import config from "./config/settings"

const PORT = config.PORT

// starts the Express server
app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${PORT}`);
});