module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/nome-repo/' // nome del repo su GitHub
    : '/'
};