let myEmojis = ["❓", "❓", "❓"] 
let mySavedEmojis = []
let userName = "Mysterious Unnamed Visitor" 
let numberOfTimesRandomizeButtonTried = 0
let numberOfTimesSelectEmojiButtonTried = 0
let numberOfTimesUndoButtonTried = 0

const userNameInput = document.getElementById("user-name-input") 
const intialPopupWindow = document.getElementById("initial-popup-window")
const secondPopupWindow = document.getElementById("second-popup-window")
const thirdPopupWindow = document.getElementById("third-popup-window")
const fourthPopupWindow = document.getElementById("fourth-popup-window")
const fifthPopupWindow = document.getElementById("fifth-popup-window")
const sixthPopupWindow = document.getElementById("sixth-popup-window")
const seventhPopupWindow = document.getElementById("seventh-popup-window")

const welcomeMessage = document.getElementById("welcome-message")
const firstSetOfInstructions = document.getElementById("first-set-of-instructions")
const secondSetOfInstructions = document.getElementById("second-set-of-instructions")
const thirdSetOfInstructions = document.getElementById("third-set-of-instructions")
const fourthSetOfInstructions = document.getElementById("fourth-set-of-instructions")
const fifthSetOfInstructions = document.getElementById("fifth-set-of-instructions")

const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const buttonWrapper = document.getElementById("button-wrapper")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")
const SaveArea = document.getElementById("saveArea")
const SubmitNameButton = document.getElementById("submit-name-button")
const initialPopupWindowBackgroundContainer = document.getElementById("initial-popup-window-background-container")



let selectEmojiIsAlive = false
let undoIsAlive = false
let finalizeIsAlive = false
let randomizeIsAlive = false

SaveArea.style.display = "none" 
emojiContainer.style.display = "none"
buttonWrapper.style.display = "none"
secondPopupWindow.style.display = "none"
thirdPopupWindow.style.display = "none"
fourthPopupWindow.style.display = "none"
fifthPopupWindow.style.display = "none"
sixthPopupWindow.style.display = "none"
seventhPopupWindow.style.display = "none"
SubmitNameButton.style.visibility = "hidden"


userNameInput.addEventListener("keypress", function(){
    SubmitNameButton.style.visibility = "visible"
})

SubmitNameButton.addEventListener("click", function(){
   if (userNameInput.value === "") {
    userNameInput.setAttribute("placeholder", "Please enter name!")
   } else {
    userName = userNameInput.value 
    intialPopupWindow.style.display = "none"
    secondPopupWindow.style.display = "flex"
    welcomeMessage.innerHTML = `<span>Welcome to the myEmojis app, ${userName}! Here are some quick instructions to get you started.</span>`
    setTimeout (loadFirstSetOfInstructions, 2000)
}})

function loadFirstSetOfInstructions() {
    emojiContainer.style.display = "flex"
    buttonWrapper.style.display = "flex"
    renderEmojiOptions()
   
    initialPopupWindowBackgroundContainer.style.zIndex = "-1"
    randomizeIsAlive = true 
    secondPopupWindow.style.display = "none"
    thirdPopupWindow.style.display = "flex"
    firstSetOfInstructions.innerHTML = "<span>Click the green <span class='highlight-green'>'randomize'</span> button or press your <span class='highlight-green'>[space] key </span> to get a set of three random emojis.</span> <br> <br> <br> <span>Try it five times now!</span>"
    shiftBtn.addEventListener("click", function(){
        if (numberOfTimesRandomizeButtonTried === 5){
            loadSecondSetOfInstructions()
        }})  

    addEventListener("keydown", function(event) {
            if (event.key === " ") {
                if (numberOfTimesRandomizeButtonTried === 5){
                    loadSecondSetOfInstructions()
                }}})
    }


function loadSecondSetOfInstructions() {
    thirdPopupWindow.style.display = "none"
    SaveArea.style.display = "block" 
    selectEmojiIsAlive = true
    fourthPopupWindow.style.display = "flex"
    secondSetOfInstructions.innerHTML = `<span>When you see an emoji that represents something about you, click on it or press the 1️⃣, 2️⃣, or 3️⃣ button on your keyboard to save it. </span> <br><br><br> <span>Try it five times now! </span>`
}


function loadThirdSetOfInstructions() {
    console.log("hello, daniel!")
    fourthPopupWindow.style.display = "none"
    fifthPopupWindow.style.display = "flex"
    undoIsAlive = true
    randomizeIsAlive = false
    selectEmojiIsAlive = false
    thirdSetOfInstructions.innerHTML = '<span>If you make a mistake or want to get rid of the last emoji you saved, just press the<span class="undo-highlight"> "undo" button</span>.</span> <br> <br> <br> <span>Press the <span class="undo-highlight"> "undo" button</span>five times now!</span>'
}

function loadFourthSetOfInstructions() {
    fifthPopupWindow.style.display = "none"
    sixthPopupWindow.style.display = "flex"
    undoIsAlive = false
    fourthSetOfInstructions.innerHTML = `<span>When you want to finish your selection of emojis, press the <span class="finalize-highlight">"finalize" button.</span></span> 
                                            <br> <br> <br> 
                                            <span>Press the  <span class="finalize-highlight">"finalize" button once</span>!</span>`
    pushBtn.addEventListener("click", function() {
        if (randomizeIsAlive === false){
        loadFifthSetOfInstructions()}}) 
    }

function loadFifthSetOfInstructions(){
    sixthPopupWindow.style.display = "none"
    seventhPopupWindow.style.display = "flex"
    fifthSetOfInstructions.innerHTML = `<span>Ready to start, ${userName}?</span> <br> <span>Press the <span class="highlight-green">"randomize" button</span> now!</span>`
    addEventListener("keydown", function(event) {
        if (event.key === " ") {
            startMainApp()}})
    shiftBtn.addEventListener("click", function() {
             startMainApp()})

}

function startMainApp (){
    selectEmojiIsAlive = true
    undoIsAlive = true
    finalizeIsAlive = true
    randomizeIsAlive = true
    seventhPopupWindow.style.display = "none"
    randomGenerator()
}

let emojisArray = ['💘','💝','💖','💗','💓','💞','💕','💟','❣️','💔','❤️','🧡','💛','💚','💙','💜','🤎','🖤','🤍','❤️‍','🔥','❤️‍','🩹','💯','♨️','💢','💬','👁️‍🗨️','🗨️','🗯️','💭','💤','🌐','♠️','♥️','♦️','♣️','🃏','🀄️','🎴','🎭️','🔇','🔈️','🔉','🔊','🔔','🔕','🎼','🎵','🎶','💹','🏧','🚮','🚰','♿️','🚹️','🚺️','🚻','🚼️','🚾','🛂','🛃','🛄','🛅','⚠️','🚸','⛔️','🚫','🚳','🚭️','🚯','🚱','🚷','📵','🔞','☢️','☣️','⬆️','↗️','➡️','↘️','⬇️','↙️','⬅️','↖️','↕️','↔️','↩️','↪️','⤴️','⤵️','🔃','🔄','🔙','🔚','🔛','🔜','🔝','🛐','⚛️','🕉️','✡️','☸️','☯️','✝️','☦️','☪️','☮️','🕎','🔯','♈️','♉️','♊️','♋️','♌️','♍️','♎️','♏️','♐️','♑️','♒️','♓️','⛎','🔀','🔁','🔂','▶️','⏩️','⏭️','⏯️','◀️','⏪️','⏮️','🔼','⏫','🔽','⏬','⏸️','⏹️','⏺️','⏏️','🎦','🔅','🔆','📶','📳','📴','♀️','♂️','⚧','✖️','➕','➖','➗','♾️','‼️','⁉️','❓️','❔','❕','❗️','〰️','💱','💲','⚕️','♻️','⚜️','🔱','📛','🔰','⭕️','✅','☑️','✔️','❌','❎','➰','➿','〽️','✳️','✴️','❇️','©️','®️','™️','#️⃣','*️⃣','0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟','🔠','🔡','🔢','🔣','🔤','🅰️','🆎','🅱️','🆑','🆒','🆓','ℹ️','🆔','Ⓜ️','🆕','🆖','🅾️','🆗','🅿️','🆘','🆙','🆚','🈁','🈂️','🈷️','🈶','🈯️','🉐','🈹','🈚️','🈲','🉑','🈸','🈴','🈳','㊗️','㊙️','🈺','🈵','🔴','🟠','🟡','🟢','🔵','🟣','🟤','⚫️','⚪️','🟥','🟧','🟨','🟩','🟦','🟪','🟫','⬛️','⬜️','◼️','◻️','◾️','◽️','▪️','▫️','🔶','🔷','🔸','🔹','🔺','🔻','💠','🔘','🔳','🔲','🕛️','🕧️','🕐️','🕜️','🕑️','🕝️','🕒️','🕞️','🕓️','🕟️','🕔️','🕠️','🕕️','🕡️','🕖️','🕢️','🕗️','🕣️','🕘️','🕤️','🕙️','🕥️','🕚️','🕦️','*️','#️','0️','1️','2️','3️','4️','5️','6️','7️','8️','9️','🛎️','🧳','⌛️','⏳️','⌚️','⏰','⏱️','⏲️','🕰️','🌡️','🗺️','🧭','🎃','🎄','🧨','🎈','🎉','🎊','🎎','🎏','🎐','🎀','🎁','🎗️','🎟️','🎫','🔮','🧿','🎮️','🕹️','🎰','🎲','♟️','🧩','🧸','🖼️','🎨','🧵','🧶','👓️','🕶️','🥽','🥼','🦺','👔','👕','👖','🧣','🧤','🧥','🧦','👗','👘','🥻','🩱','🩲','🩳','👙','👚','👛','👜','👝','🛍️','🎒','👞','👟','🥾','🥿','👠','👡','🩰','👢','👑','👒','🎩','🎓️','🧢','⛑️','📿','💄','💍','💎','📢','📣','📯','🎙️','🎚️','🎛️','🎤','🎧️','📻️','🎷','🎸','🎹','🎺','🎻','🪕','🥁','📱','📲','☎️','📞','📟️','📠','🔋','🔌','💻️','🖥️','🖨️','⌨️','🖱️','🖲️','💽','💾','💿️','📀','🧮','🎥','🎞️','📽️','🎬️','📺️','📷️','📸','📹️','📼','🔍️','🔎','🕯️','💡','🔦','🏮','🪔','📔','📕','📖','📗','📘','📙','📚️','📓','📒','📃','📜','📄','📰','🗞️','📑','🔖','🏷️','💰️','💴','💵','💶','💷','💸','💳️','🧾','✉️','💌','📧','🧧','📨','📩','📤️','📥️','📦️','📫️','📪️','📬️','📭️','📮','🗳️','✏️','✒️','🖋️','🖊️','🖌️','🖍️','📝','💼','📁','📂','🗂️','📅','📆','🗒️','🗓️','📇','📈','📉','📊','📋️','📌','📍','📎','🖇️','📏','📐','✂️','🗃️','🗄️','🗑️','🔒️','🔓️','🔏','🔐','🔑','🗝️','🔨','🪓','⛏️','⚒️','🛠️','🗡️','⚔️','💣️','🏹','🛡️','🔧','🔩','⚙️','🗜️','⚖️','🦯','🔗','⛓️','🧰','🧲','⚗️','🧪','🧫','🧬','🔬','🔭','📡','💉','🩸','💊','🩹','🩺','🚪','🛏️','🛋️','🪑','🚽','🚿','🛁','🪒','🧴','🧷','🧹','🧺','🧻','🧼','🧽','🧯','🛒','🚬','⚰️','⚱️','🏺','🕳️','🏔️','⛰️','🌋','🗻','🏕️','🏖️','🏜️','🏝️','🏟️','🏛️','🏗️','🧱','🏘️','🏚️','🏠️','🏡','🏢','🏣','🏤','🏥','🏦','🏨','🏩','🏪','🏫','🏬','🏭️','🏯','🏰','💒','🗼','🗽','⛪️','🕌','🛕','🕍','⛩️','🕋','⛲️','⛺️','🌁','🌃','🏙️','🌄','🌅','🌆','🌇','🌉','🗾','🏞️','🎠','🎡','🎢','💈','🎪','🚂','🚃','🚄','🚅','🚆','🚇️','🚈','🚉','🚊','🚝','🚞','🚋','🚌','🚍️','🚎','🚐','🚑️','🚒','🚓','🚔️','🚕','🚖','🚗','🚘️','🚙','🚚','🚛','🚜','🏎️','🏍️','🛵','🦽','🦼','🛺','🚲️','🛴','🛹','🚏','🛣️','🛤️','🛢️','⛽️','🚨','🚥','🚦','🛑','🚧','⚓️','⛵️','🛶','🚤','🛳️','⛴️','🛥️','🚢','✈️','🛩️','🛫','🛬','🪂','💺','🚁','🚟','🚠','🚡','🛰️','🚀','🛸','🎆','🎇','🎑','🗿','⚽️','⚾️','🥎','🏀','🏐','🏈','🏉','🎾','🥏','🎳','🏏','🏑','🏒','🥍','🏓','🏸','🥊','🥋','🥅','⛳️','⛸️','🎣','🤿','🎽','🎿','🛷','🥌','🎯','🪀','🪁','🎱','🎖️','🏆️','🏅','🥇','🥈','🥉','🍇','🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎','🍏','🍐','🍑','🍒','🍓','🥝','🍅','🥥','🥑','🍆','🥔','🥕','🌽','🌶️','🥒','🥬','🥦','🧄','🧅','🍄','🥜','🌰','🍞','🥐','🥖','🥨','🥯','🥞','🧇','🧀','🍖','🍗','🥩','🥓','🍔','🍟','🍕','🌭','🥪','🌮','🌯','🥙','🧆','🥚','🍳','🥘','🍲','🥣','🥗','🍿','🧈','🧂','🥫','🍱','🍘','🍙','🍚','🍛','🍜','🍝','🍠','🍢','🍣','🍤','🍥','🥮','🍡','🥟','🥠','🥡','🍦','🍧','🍨','🍩','🍪','🎂','🍰','🧁','🥧','🍫','🍬','🍭','🍮','🍯','🍼','🥛','☕️','🍵','🍶','🍾','🍷','🍸️','🍹','🍺','🍻','🥂','🥃','🥤','🧃','🧉','🧊','🥢','🍽️','🍴','🥄','🔪','🐵','🐒','🦍','🦧','🐶','🐕️','🦮','🐕‍','🦺','🐩','🐺','🦊','🦝','🐱','🐈️','🐈‍','🦁','🐯','🐅','🐆','🐴','🐎','🦄','🦓','🦌','🐮','🐂','🐃','🐄','🐷','🐖','🐗','🐽','🐏','🐑','🐐','🐪','🐫','🦙','🦒','🐘','🦏','🦛','🐭','🐁','🐀','🐹','🐰','🐇','🐿️','🦔','🦇','🐻','🐻‍','❄️','🐨','🐼','🦥','🦦','🦨','🦘','🦡','🐾','🦃','🐔','🐓','🐣','🐤','🐥','🐦️','🐧','🕊️','🦅','🦆','🦢','🦉','🦩','🦚','🦜','🐸','🐊','🐢','🦎','🐍','🐲','🐉','🦕','🦖','🐳','🐋','🐬','🐟️','🐠','🐡','🦈','🐙','🦑','🦀','🦞','🦐','🦪','🐚','🐌','🦋','🐛','🐜','🐝','🐞','🦗','🕷️','🕸️','🦂','🦟','🦠','💐','🌸','💮','🏵️','🌹','🥀','🌺','🌻','🌼','🌷','🌱','🌲','🌳','🌴','🌵','🎋','🎍','🌾','🌿','☘️','🍀','🍁','🍂','🍃','🌍️','🌎️','🌏️','🌑','🌒','🌓','🌔','🌕️','🌖','🌗','🌘','🌙','🌚','🌛','🌜️','☀️','🌝','🌞','🪐','💫','⭐️','🌟','✨','🌠','🌌','☁️','⛅️','⛈️','🌤️','🌥️','🌦️','🌧️','🌨️','🌩️','🌪️','🌫️','🌬️','🌀','🌈','🌂','☂️','☔️','⛱️','⚡️','❄️','☃️','⛄️','☄️','🔥','💧','🌊','💥','💦','💨','😀','😃','😄','😁','😆','😅','🤣','😂','🙂','🙃','😉','😊','😇','🥰','😍','🤩','😘','😗','☺️','😚','😙','😋','😛','😜','🤪','😝','🤑','🤗','🤭','🤫','🤔','🤐','🤨','😐️','😑','😶','😏','😒','🙄','😬','🤥','😌','😔','😪','😮‍','💨','🤤','😴','😷','🤒','🤕','🤢','🤮','🤧','🥵','🥶','😶‍','🌫️','🥴','😵‍','💫','😵','🤯','🤠','🥳','😎','🤓','🧐','😕','😟','🙁','☹️','😮','😯','😲','😳','🥺','😦','😧','😨','😰','😥','😢','😭','😱','😖','😣','😞','😓','😩','😫','🥱','😤','😡','😠','🤬','😈','👿','💀','☠️','💩','🤡','👹','👺','👻','👽️','👾','🤖','😺','😸','😹','😻','😼','😽','🙀','😿','😾','🙈','🙉','🙊','👋','🤚','🖐️','✋','🖖','👌','🤏','✌️','🤞','🤟','🤘','🤙','👈️','👉️','👆️','🖕','👇️','☝️','👍️','👎️','✊','👊','🤛','🤜','👏','🙌','👐','🤲','🤝','🙏','✍️','💅','🤳','💪','🦾','🦿','🦵','🦶','👂️','🦻','👃','🧠','🦷','🦴','👀','👁️','👅','👄','💋','👶','🧒','👦','👧','🧑','👨','👩','🧔','🧔‍♀️','🧔‍♂️','🧑','👨‍','🦰','👩‍','🦰','🧑','👨‍','🦱','👩‍','🦱','🧑','👨‍','🦳','👩‍','🦳','🧑','👨‍','🦲','👩‍','🦲','👱','👱‍♂️','👱‍♀️','🧓','👴','👵','🙍','🙍‍♂️','🙍‍♀️','🙎','🙎‍♂️','🙎‍♀️','🙅','🙅‍♂️','🙅‍♀️','🙆','🙆‍♂️','🙆‍♀️','💁','💁‍♂️','💁‍♀️','🙋','🙋‍♂️','🙋‍♀️','🧏','🧏‍♂️','🧏‍♀️','🙇','🙇‍♂️','🙇‍♀️','🤦','🤦‍♂️','🤦‍♀️','🤷','🤷‍♂️','🤷‍♀️','🧑‍⚕️','👨‍⚕️','👩‍⚕️','🧑‍🎓','👨‍🎓','👩‍🎓','🧑‍🏫','👨‍🏫','👩‍🏫','🧑‍⚖️','👨‍⚖️','👩‍⚖️','🧑‍🌾','👨‍🌾','👩‍🌾','🧑‍🍳','👨‍🍳','👩‍🍳','🧑‍🔧','👨‍🔧','👩‍🔧','🧑‍🏭','👨‍🏭','👩‍🏭','🧑‍💼','👨‍💼','👩‍💼','🧑‍🔬','👨‍🔬','👩‍🔬','🧑‍💻','👨‍💻','👩‍💻','🧑‍🎤','👨‍🎤','👩‍🎤','🧑‍🎨','👨‍🎨','👩‍🎨','🧑‍✈️','👨‍✈️','👩‍✈️','🧑‍🚀','👨‍🚀','👩‍🚀','🧑‍🚒','👨‍🚒','👩‍🚒','👮','👮‍♂️','👮‍♀️','🕵️','🕵️‍♂️','🕵️‍♀️','💂','💂‍♂️','💂‍♀️','👷','👷‍♂️','👷‍♀️','🤴','👸','👳','👳‍♂️','👳‍♀️','👲','🧕','🤵','🤵‍♂️','🤵‍♀️','👰','👰‍♂️','👰‍♀️','🤰','🤱','👩‍','🍼','👨‍','🍼','🧑‍','🍼','👼','🎅','🤶','🧑‍','🎄','🦸','🦸‍♂️','🦸‍♀️','🦹','🦹‍♂️','🦹‍♀️','🧙','🧙‍♂️','🧙‍♀️','🧚','🧚‍♂️','🧚‍♀️','🧛','🧛‍♂️','🧛‍♀️','🧜','🧜‍♂️','🧜‍♀️','🧝','🧝‍♂️','🧝‍♀️','🧞','🧞‍♂️','🧞‍♀️','🧟','🧟‍♂️','🧟‍♀️','💆','💆‍♂️','💆‍♀️','💇','💇‍♂️','💇‍♀️','🚶','🚶‍♂️','🚶‍♀️','🧍','🧍‍♂️','🧍‍♀️','🧎','🧎‍♂️','🧎‍♀️','🧑‍','🦯','👨‍','🦯','👩‍','🦯','🧑‍','🦼','👨‍','🦼','👩‍','🦼','🧑‍','🦽','👨‍','🦽','👩‍','🦽','🏃','🏃‍♂️','🏃‍♀️','💃','🕺','🕴️','👯','👯‍♂️','👯‍♀️','🧖','🧖‍♂️','🧖‍♀️','🧗','🧗‍♂️','🧗‍♀️','🤺','🏇','⛷️','🏂️','🏌️','🏌️‍♂️','🏌️‍♀️','🏄️','🏄‍♂️','🏄‍♀️','🚣','🚣‍♂️','🚣‍♀️','🏊️','🏊‍♂️','🏊‍♀️','⛹️','⛹️‍♂️','⛹️‍♀️','🏋️','🏋️‍♂️','🏋️‍♀️','🚴','🚴‍♂️','🚴‍♀️','🚵','🚵‍♂️','🚵‍♀️','🤸','🤸‍♂️','🤸‍♀️','🤼','🤼‍♂️','🤼‍♀️','🤽','🤽‍♂️','🤽‍♀️','🤾','🤾‍♂️','🤾‍♀️','🤹','🤹‍♂️','🤹‍♀️','🧘','🧘‍♂️','🧘‍♀️','🛀','🛌','🧑‍','🤝‍','🧑','👭','👫','👬','💏','👩‍❤️‍💋‍👨','👨‍❤️‍💋‍👨','👩‍❤️‍💋‍👩','💑','👩‍❤️‍👨','👨‍❤️‍👨','👩‍❤️‍👩','👪️','👨‍👩‍👦','👨‍👩‍👧','👨‍👩‍👧‍👦','👨‍👩‍👦‍👦','👨‍👩‍👧‍👧','👨‍👨‍👦','👨‍👨‍👧','👨‍👨‍👧‍👦','👨‍👨‍👦‍👦','👨‍👨‍👧‍👧','👩‍👩‍👦','👩‍👩‍👧','👩‍👩‍👧‍👦','👩‍👩‍👦‍👦','👩‍👩‍👧‍👧','👨‍👦','👨‍👦‍👦','👨‍👧','👨‍👧‍👦','👨‍👧‍👧','👩‍👦','👩‍👦‍👦','👩‍👧','👩‍👧‍👦','👩‍👧‍👧','🗣️','👤','👥','👣'];





function randomGenerator() {
    if (randomizeIsAlive === true) {
        numberOfTimesRandomizeButtonTried++ 
        myEmojis = []
    for (let i = 0; i < 3; i++) {
    myEmojis.push(emojisArray[Math.floor(Math.random() * emojisArray.length)])
    }    renderEmojiOptions()
}}


shiftBtn.addEventListener("click", function() {
    randomGenerator()
})

addEventListener("keydown", function(event) {
    if (event.key === " ") {
        function buttonEffect(){
            document.getElementById("shift-btn").classList.toggle("active-button-state")}
        buttonEffect()
        randomGenerator()
        setTimeout(buttonEffect, 200)
}})




function renderEmojiOptions() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        emojiContainer.innerHTML += `<button onclick="anotherTest(${i})" id="emoji-${i}"> ${myEmojis[i]} </button>`
        }
   }
    

addEventListener("keypress", function(event) {
   if (selectEmojiIsAlive === true) { 
   if (event.key === "1" && myEmojis[0] != "✅") {
         document.getElementById("saveArea").textContent += myEmojis[0]
          mySavedEmojis.push(myEmojis[0])
          myEmojis[0] = "✅"
          renderEmojiOptions()
          numberOfTimesSelectEmojiButtonTried++
    } else if (event.key === "2" && myEmojis[1] != "✅") {
       document.getElementById("saveArea").textContent += myEmojis[1]
        mySavedEmojis.push(myEmojis[1])
        myEmojis[1] = "✅"
         renderEmojiOptions()
         numberOfTimesSelectEmojiButtonTried++
   } else if (event.key === "3" && myEmojis[2] != "✅") {
       document.getElementById("saveArea").textContent += myEmojis[2]
        mySavedEmojis.push(myEmojis[2])
         myEmojis[2] = "✅"
         renderEmojiOptions()
         numberOfTimesSelectEmojiButtonTried++
  }
  document.getElementById("saveArea").scrollTo(0, document.getElementById("saveArea").scrollHeight)
  if (numberOfTimesSelectEmojiButtonTried === 5) {
    loadThirdSetOfInstructions()
  }
}})
    
    
    function anotherTest(number) {
      if (selectEmojiIsAlive === true) {
      if (number === 0 && myEmojis[0] != "✅" ) {
      document.getElementById("saveArea").textContent += myEmojis[0]
        mySavedEmojis.push(myEmojis[0])
        myEmojis[0] = "✅"
        renderEmojiOptions()
        numberOfTimesSelectEmojiButtonTried++
    } else if (number === 1 && myEmojis[1] != "✅" ) {
        document.getElementById("saveArea").textContent += myEmojis[1]
        mySavedEmojis.push(myEmojis[1])
        myEmojis[1] = "✅"
        renderEmojiOptions()
        numberOfTimesSelectEmojiButtonTried++
    } else if (number === 2 && myEmojis[2] != "✅" )  {
        document.getElementById("saveArea").textContent += myEmojis[2]
        mySavedEmojis.push(myEmojis[2])
        myEmojis[2] = "✅"
        renderEmojiOptions()
        numberOfTimesSelectEmojiButtonTried++
    }
        document.getElementById("saveArea").scrollTo(0, document.getElementById("saveArea").scrollHeight)
        if (numberOfTimesSelectEmojiButtonTried === 5) {
            loadThirdSetOfInstructions()
      }}}



pushBtn.addEventListener("click", function(){
    if (finalizeIsAlive === true) {
    for (let i = 0; i < mySavedEmojis.length; i++) {
        document.getElementById("final-display-area").textContent += mySavedEmojis[i]
    }
    document.getElementById("hide").style.display = "none"
    seventhPopupWindow.style.display = "none"
    document.getElementById("final-display-area").style.width = "100VW"
    document.getElementById("final-display-area").style.height = "100VH"
    document.getElementById("final-display-area").style.fontSize = "40px" 
   }})
    
   unshiftBtn.addEventListener("click", function() {
    if (undoIsAlive === true) {
        SaveArea.textContent = ""
        mySavedEmojis.pop()
        for (let i = 0; i < mySavedEmojis.length; i++)
        SaveArea.textContent += mySavedEmojis[i]}
        numberOfTimesUndoButtonTried++
        if (numberOfTimesUndoButtonTried === 5) {
            loadFourthSetOfInstructions()
        }
    })