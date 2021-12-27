module.exports = {
	mode: 'development',
  entry: __dirname + '/src/index.js',
	output:{
		filename: 'bundle.js',
		path: __dirname + '/dist'
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react']
				}
			}
		}]
	},
	devtool: 'source-map'
};
