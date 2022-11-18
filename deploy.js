const ghpages = require('gh-pages');
const NAME = 'psb-host'; // repo name
const repositoryUrl = `https://github.com/BlokOne/${NAME}`;


ghpages.publish('dist', {
   branch: 'gh-pages',
   repo: repositoryUrl
}, () => { console.log('Deploy is successful') });