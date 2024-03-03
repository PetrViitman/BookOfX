import { Assets } from "pixi.js"
const COMMON_PATH = './'
let commonResources = {}

function spreadWrappedTextures(resources) {
	for (const {textures} of Object.values(resources))
		if (textures)
			for (const [name, texture] of Object.entries(textures))
				resources[name] = texture

	return resources
}


export async function getPreloadingResources() {
	Assets.addBundle('preloading', {
		preloading_elements: COMMON_PATH + '/atlases/preloading_elements.json',
		egypt:  COMMON_PATH + '/fonts/egypt.otf',
	})

	commonResources = spreadWrappedTextures(
		await Assets.loadBundle('preloading'))

	return commonResources
}

export async function getResources(onProgressCallback) {    
	Assets.addBundle('gameAssets', {
		// ATLASES...
		elements: COMMON_PATH + '/atlases/elements.json',
		lines: COMMON_PATH + '/atlases/lines.json',
		// ...ATLASES

		// JPG...
		background_default_game: COMMON_PATH + '/jpg/background_default_game.jpg',
		background_hat: COMMON_PATH + '/jpg/background_hat.jpg',
		// ...JPG
	})

	const resources = spreadWrappedTextures(
		await Assets.loadBundle('gameAssets', onProgressCallback))

	return {...commonResources, ...resources}
}
