const nconf = require('nconf');
nconf.file('diasify.json');
nconf.defaults({
    'assetsDir': 'resources/assets/js/',
    'storeDirName': 'store/',
    'mixinsDirName': 'mixins/',
    'routerDirName': 'router/',
    'langDirName': 'lang/',
    'mtFileName': 'mutation-types.js',
});

module.exports = nconf;