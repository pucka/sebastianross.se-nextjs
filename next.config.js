const path = require('path')

module.exports = {
  poweredByHeader: false,
  wcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
