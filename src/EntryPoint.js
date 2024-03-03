
import { GameLogic } from './busynessLogic/GameLogic'
import { Presentation } from './presentation/Presentation'

const customURLParameters = new URLSearchParams(document.location.search)
const languageCode = customURLParameters.get("lang") ?? 'en'
const customVFXLevel = customURLParameters.get("vfx")
const customUIOption = customURLParameters.get("view")

new GameLogic(new Presentation({
    wrapperHTMLElementId: 'gameWrapper',
    customVFXLevel,
    customUIOption,
    languageCode,
})).init()


