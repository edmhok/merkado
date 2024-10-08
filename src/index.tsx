import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import store, { persistor } from "./store/index";
import App from "./App";
import { LanguageProvider } from "./i18n";
import "./tracing";
import "./assets/css/global.css";

window.onerror = (msg, url, row, col, error) => {
    const _error = error ? error.toString() : "";
    console.error(msg, url, row, col, error, "msg, row, col, error");
    // update users not reload error debug
    if (/Loading chunk *.{1,} failed./.test(_error) || /Unexpected token '<'/.test(_error)) {
        window.location.reload();
    }
};

// @ts-ignore
// Fix astrox me wallet's bug
window.process = {};

ReactDOM.render(
    // @ts-ignore TODO:FIX
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <LanguageProvider>
                    <HashRouter >
                        <App />
                    </HashRouter>
                </LanguageProvider>
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
