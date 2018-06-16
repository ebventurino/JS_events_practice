
//If you drag one of the cards into the top/bottom box, and then drag another card into the first one, you get a nested card. You need to prevent this from happening.
// The user should only be able to drag one card into either box. Use the childNodes property to ensure that, if a card is already in the box, another can't be added.
// The user should be able to move a card from the top/bottom box back to the middle.



const DragDropManager = Object.create(null, {
  init: {
    value: () => {
      const stages = document.querySelectorAll(".stage")

      stages.forEach(stage => {
        // Gain reference of item being dragged
        stage.ondragstart = e => {
          e.dataTransfer.setData("text", e.target.classList)
          console.log(e,"e")
        }
      })

      const targets = document.querySelectorAll(".target")
     
      targets.forEach(target => {
        // Dragover not supported by default. Turn that off.
        target.ondragover = e => e.preventDefault()
        

        target.ondrop = e => {
          // Enabled dropping on targets
          e.preventDefault()

          // Determine what's being dropped
          const data = e.dataTransfer.getData("text")
          console.log(data)
          // if else statement 

        if (target.childNodes.length === 0) {
          //append card to target
          e.preventDefault();
          e.target.appendChild(document.querySelector(`.${data.split(" ")[1]}`));
          console.log("append to target");
          // card should not append to article.
        } else if (target === target.querySelector("article")){
          e.target.appendChild(document.querySelector(`.${data.split(" ")[1]}`))
          console.log("don't append to target")
        } else {
          console.log("invalid")
        }
console.log(target.childNodes.length)
         
          // Append card to target component as child
          // TODO: This should only happen if the target has no children nodes
          // TODO: This should not happen if the target is another stage card
          // e.target.appendChild(document.querySelector(`.${data.split(" ")[1]}`))
        }
      })
    }
  }
})

DragDropManager.init()