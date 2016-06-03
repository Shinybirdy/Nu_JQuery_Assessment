
var clicks= 0;
        // When the page loads, have a button on the DOM that reads Generate.
$(document).ready(function(){

          // click for generateRow id
  $('#generateRow').on('click', function(){
    clicks++;
    console.log( 'generateRow clicked');

          // create new container div
    var newContainer = document.createElement('div');

    // set class
    newContainer.className='container';
    // set id
    newContainer.id='row' + clicks;
    // create change button
    var changeButton = document.createElement('button');
    changeButton.textContent='Change - Click Me Twice for Fun!';
    changeButton.className = 'change';
    // append to container
    newContainer.appendChild( changeButton );
    // create delete button
    var deleteButton = document.createElement('button');
    deleteButton.textContent='delete';
    deleteButton.className = 'delete';
//Upon clicking that button, append a new container onto the DOM.
    // append to container
    newContainer.appendChild( deleteButton );
    // create text output
    var clicksOutput = document.createElement('p');
    // append to container
    newContainer.appendChild( clicksOutput );
    // append container to body
    $('body').append( newContainer );
    // set text for all p tags
    $('p').text( clicks );
  });

  // click for all of 'change' class
  $(document).on('click', '.change', function(){
    // get parent
    var parent = $(this).parent();
    // get parent class
    var parentClass = parent.attr('class');
    // toggle class color
    if( parentClass == 'red'){
      // remove current class and add new class
      parent.removeClass().addClass('yellow');
      parent.css({ 'background-color': 'yellow' });
    }else{
      parent.removeClass().addClass('red');
      parent.css({ 'background-color': 'red' });
    }
  });

  // click for all with class delete
  $(document).on('click', '.delete', function(){
    // remove parent
    $(this).parent().remove();
  });
});





//
//     X  When the page loads, have a button on the DOM that says 'generate'.

//    X Upon clicking on that button, append a new container onto the DOM.

//    X That container should have two buttons, one that reads 'delete', the other that reads 'change'.

//    XAdditionally, there should be text that provides a number. 

//    X The number should be the number of times the 'generate row' button has been clicked.
//
//     The delete button should delete JUST the container that the button is in. The change button should change the background-color of the container to red. The default or 'normal' state of the background-color should be yellow. Clicking the button a second time should change it back to yellow, 3rd time red, 4th time yellow, etc.
//
//     Do not add in anything additional beyond what is required. The goal is not to be clever here, it is simply to execute on the provided instructions.
//
//     Once you are complete, check your work into a new repo and post it on GitHub.
//
//     A friendly reminder that this is simply a way for us to see how you are individually doing with the technology. If this is no problem, great. If you are struggling with it, get done what you can and still submit. This assessment is not an indicator of how you will perform post Prime or a measure of overall success thus far. It just gives us an idea of where you are at.
//
//     Just relax and show us what you know!
//
//     Thanks and good luck!
