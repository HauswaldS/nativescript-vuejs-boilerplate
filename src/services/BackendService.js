import {getString, setString} from 'tns-core-modules/application-settings';

const TOKEN_KEY = 'auth_token';

export default class BackendService {
    constructor() {
        this.base_url = `http://v2.lasolutionarchibald.com$${process.env.npm_config_dev ? '/app_dev.php' : ''}`;
        this.api_url = `${this.base_url}/api`
    }

    is_logged_in() {
        return !!getString(TOKEN_KEY)
    }

    get token() {
        console.log('GETTING TOKEN: ' + getString(TOKEN_KEY))
        return getString(TOKEN_KEY);
    }

    set token(auth_token) {
        setString(TOKEN_KEY, auth_token);
        console.log('TOKEN SET TO: ' + TOKEN_KEY)
    }

}