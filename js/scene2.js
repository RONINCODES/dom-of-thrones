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

  //giving ned a Sword
  sword = document.querySelector('#sword')
  stage.append(sword)
  sword.style.position = 'absolute'
  sword.style.top = '77%'
  sword.style.left ='31.5%'
  sword.style.height = '5%'

  //gotta flip the sword arround to point at joffrey
  sword.style.transform = 'rotateY(150deg)'

//++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // Joffrey
  //setting up the joffrey container
  joffreyContainer = document.createElement('div')
  stage.append(joffreyContainer)

  //setting up the position and size of  joffrey container (can't be seen yet)
  joffreyContainer.style.position = 'absolute'
  joffreyContainer.style.width = '10%'
  joffreyContainer.style.height = '24%'
  joffreyContainer.style.top = '50%'
  joffreyContainer.style.left = '15%'

  //colouring in the div for joffreyContainer
  joffreyContainer.style.border = '2px solid red'
  joffreyContainer.style.background = 'yellow'

  //moving joffrey's head in the div
  joffrey = document.querySelector('#joffrey')
  joffreyContainer.append(joffrey)

  //putting some armour on joffrey
  king = document.querySelector('#king')
  joffreyContainer.append(king)

  //add border to joffreys head and armour for better viewing
  joffrey.style.border = '2px solid blue'
  king.style.border = '2px solid green'

  //sizing joffreys head
  joffrey.style.width = '63.5%'
  joffrey.style.left = '37%'

  //bringing joffreys head and armour together
  joffrey.style.position = 'absolute'
  joffrey.style.top = 0
  king.style.position = 'absolute'
  king.style.bottom = 0
  joffreyContainer.style.height = '37%'

  //postioning joffrey beside Ned
  joffreyContainer.style.top = '57%'
  joffreyContainer.style.left = '45%'


  //remove joffreys background
  joffrey.style.border = 'none'
  king.style.border = 'none'
  joffreyContainer.style.border = 'none'
  joffreyContainer.style.background = 'none'






  // Setup Props

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1
  //sword starting position (in neds hands)
  frame(function() {
    sword.style.top = '77%'
    sword.style.left ='31.5%'
  })

  //sword 2nd frame position
  frame(function() {
    sword.style.top = '74%'
    sword.style.left ='36%'
  })

  //sword middle position (flying towards joffrey's neck)
  frame(function() {
    sword.style.top = '71%'
    sword.style.left = '40%'
  })

  //sword 1 frame passed middle position (flying towards joffrey's neck)
  frame(function() {
    sword.style.top = '68%'
    sword.style.left = '42%'
  })

//sword ending position (at joffreys neck)
  frame(function() {
    sword.style.top = '65%'
    sword.style.left ='45%'
  })

  // Stage direction 2
//Joffrey's head starting position
  frame(function() {
    joffrey.style.transform = 'rotateZ(150deg)'
    joffrey.style.left = '37%'
    joffrey.style.top = '0px'

  })


  //Joffrey's head middle position
    frame(function() {
      joffrey.style.left = '60%'
      joffrey.style.top = '0px'
      joffrey.style.transform = 'rotateZ(180deg)'
    })

  //Joffrey's head ending position
    frame(function() {
      joffrey.style.left = '100%'
      joffrey.style.top = '70%'
      joffrey.style.transform = 'rotateZ(200deg)'
    })

}
