const ghpages = require('gh-pages');
const NAME = 'psb-host'; // repo name
const repositoryUrl = `https://github.com/BlokOne/${NAME}`;


ghpages.publish('public', {
   branch: 'gh-pages',
   repo: "https://github.com/BlokOne/psb-host"
}, () => { console.log('Deploy is successful') });