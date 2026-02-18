import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from 'path';

export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: [["babel-plugin-react-compiler"]],
			},
		}),
		tailwindcss(),
		createSvgIconsPlugin({
			iconDirs: [path.resolve( "public/assets/icons")], // путь к иконкам
			symbolId: "icon-[dir]-[name]", // ID: icon-ui-home для public/assets/icons/ui/home.svg
			svgoOptions: {
				plugins: [
					{
						name: "preset-default",
						params: { overrides: { removeViewBox: false } },
					},
					"removeDimensions",
					"prefixIds", // избегает коллизий ID
				],
			},
			inject: "body-last", // инжект в конец body
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve( "./src"),
		},
	},
});