export const setNewOffset = (card, mouseMoveDir = { x: 0, y: 0 }) => {
    const offsetLeft = card.offsetLeft - mouseMoveDir.x;
    const offsetTop = card.offsetTop - mouseMoveDir.y;

    return {
        x: offsetLeft < 0 ? 0 : offsetLeft,
        y: offsetTop < 0 ? 0 : offsetTop,
    };
};

export const autoGrow = (textAreaRef) => {
    const { current } = textAreaRef;

    current.style.height = "auto";
    current.style.height = current.scrollHeight + "px";
};

export const setZIndex = selectedCard => {
    selectedCard.style.zIndex = 999
    Array.from(document.getElementsByClassName("card")).forEach((card) => {
        if (card !== selectedCard) {
            card.style.zIndex = selectedCard.style.zIndex - 1;
        }
    });

}

export const getRandomNumber = () => {
    return Math.floor(Math.random() * 500) + 1;
}

export const getRandomColor = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex];
}

export const dataStorageKey = 'notesData'

export const setLocalItem = (notesData) => {
    localStorage.setItem(dataStorageKey, JSON.stringify(notesData))
}

export const getLocalItem = () => {
    const currentData = localStorage.getItem(dataStorageKey)
    return currentData ? JSON.parse(currentData) : []
}


// export const emptyData = {
//     id: 1,
//     body: JSON.stringify(
//         'Resources:\n- Book: "You Don\'t Know JS: Scope & Closures" by Kyle Simpson.\n\n- Online Course: "JavaScript Patterns" on Udemy.\n\n- Articles:\n"Understanding JavaScript Closures" on Medium.\n\n"Mastering JavaScript Modules" on Dev.to.'
//     ),
//     colors: JSON.stringify({
//         id: "color-purple",
//         colorHeader: "#FED0FD",
//         colorBody: "#FEE5FD",
//         colorText: "#18181A",
//     }),
//     position: JSON.stringify({ x: 505, y: 10 }),
// }

