function scene2() {
  // testing to make sure our scene2.js file is wolrking ok.
  console.log('Executing scene 2!');

  // Setup Stage
  stage =     document.querySelector('#stage')

  // get source of the setting you want to implement - in this case castle
  castleImgSrc = castle.getAttribute('src')
  // reset stageImg src, with the image source of the setting you want to change it to.
  stageImg.setAttribute('src', castleImgSrc)

  // Setup Cast

  //Ned
  nedContainer = document.createElement('div')
  stage.append(nedContainer)
  nedContainer.style.position = 'absolute'
  nedContainer.style.width = '10%'
  nedContainer.style.height = '20%'
  nedContainer.style.top = '50%'
  nedContainer.style.left = '50%'

  // below we are creating a yellow box with a red border as a placeholder -
  // where we will place Neds head into
  nedContainer.style.border = '2px solid red'
  nedContainer.style.background = 'yellow'
  // put ned in a variable
  ned = document.querySelector('#ned')
  ned.style.width = '70%'
  ned.style.position = 'absolute'
  ned.style.top = 0


  //change nedContainer from a yellow box to his head propper
  nedContainer.append(ned)
  nedContainer.style.height = '44%'
  nedContainer.style.height = '37%'
  //adding leather armour to the nedContainer/ the below code makes it appear on set
  leather = document.querySelector('#leather-armour')
  leather.style.position = 'absolute'
  leather.style.bottom = 0
  nedContainer.append(leather)

  //adding a border to both neds head and armour - just to make it easy to see -temporary code
  ned.style.border = '2px solid blue'
  leather.style.border = '2px solid green'
  console.log('nedContainer.style.height')

  //moving ned to a certain spot - on the rocks in this case
  nedContainer.style.top = '55%'
  nedContainer.style.left = '25%'

  //removing boreders from ned container
  ned.style.border ='none'
  leather.style.border = 'none'
  nedContainer.style.border = 'none'
  nedContainer.style.background = 'none'


  // Character 2

  // Setup Props

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {

  })

  // Stage direction 2

  frame(function() {

  })

}
