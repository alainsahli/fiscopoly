# Setup UI
To setup the frontend development environment execute following commands:
    cd frontend
    npm install
    grunt dev
    
_grunt dev_ is meant to be used without backend and potential requests should be mocked in _api/mock.js_
_grunt proxy_ will work the same way as _grunt dev_ except that all the request are forwarded to the backend on 8080.