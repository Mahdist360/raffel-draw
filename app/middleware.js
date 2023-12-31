const morgan = require('morgan');
const cors = require('cors');

const middleware = [   morgan(),cors()];
module.exports = middleware;