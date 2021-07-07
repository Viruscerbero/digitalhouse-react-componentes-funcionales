const path = require("path");

module.exports = {
	entry: "./src/index.jsx",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist")
	},
	devServer: {
		contentBase: "./",
		historyApiFallback: true,
		writeToDisk: true
	},
	devtool : 'inline-source-map',
    module: {
        rules: [
            {
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
            {
				test: /\.s(a|c)ss$/,
				use: [
					'style-loader', // Takes the styles and creates a <style> tag in the page's <head> element containing those styles
					'css-loader', // Reads in a css file as a string
					'sass-loader', // Compiles Sass to CSS: turns SCSS into CSS
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader'],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ['file-loader'],
			},
        ],
    }
}
