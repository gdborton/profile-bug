const OptimizeChunkAssets = function(){}
OptimizeChunkAssets.prototype.apply = function(compiler) {
  compiler.plugin('compilation', function(compilation) {
    compilation.plugin('optimize-chunk-assets', function(chunks, callback) {
      setTimeout(callback, 10000);
    });
  });
}
module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist',
    filename: 'main.js',
  },
  plugins: [
    new OptimizeChunkAssets()
  ]
}
