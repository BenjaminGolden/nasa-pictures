import { getSpacePics } from "./data/DataManager.js"
import { Space } from "./Space.js"

const startSpacePics = () => {
    const spaceElement = document.querySelector(".spaceList");
    getSpacePics().then((spaceObj) => {
        let type = ""
        if (spaceObj.media_type === "video"){
            type="video"
        }else {
            type="img"
        }
        spaceElement.innerHTML = Space(spaceObj, type)

    })
}


startSpacePics();
