import * as Sentry from "@sentry/browser";
import Raven from 'raven-js';

function init(){
    Sentry.init({
        dsn: "https://c04ae8ef968a4a669b26906f5f2853a2@sentry.io/5173298"
    });

    Raven.config(
        "https://c04ae8ef968a4a669b26906f5f2853a2@sentry.io/5173298"
    ).install();
    
}

function log(error) {
    Raven.captureException(error);

}

export default {
    init,
    log
}