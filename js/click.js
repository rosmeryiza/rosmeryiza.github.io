$(document).ready(function(){
//cow buttons
  //function to hide ps
  function hideAllCow() {
    $('#cowProductText').hide();
    $('#cowFeedText').hide();
    $('#cowLandText').hide();
  }
  //immediately hide everything
  hideAllCow();
  $('#cowProductText').show();
  //when any button is clicked make the text appear
  $('.btn').click(function() {
    //turn on paragraph based on button clicked
    switch($(this).attr("id")) {
      case "cowProduct":
        hideAllCow();
        $('#cowProductText').show();
        // $('#corn').toggleClass('rotate');
        break;
      case "cowFeed":
        hideAllCow();
        $('#cowFeedText').show();
        break;
      case "cowLand":
        hideAllCow();
        $('#cowLandText').show();
        break;
    }
  }); //end of click function

//pig buttons
  //function to hide ps
  function hideAllPig() {
    $('#pigProductText').hide();
    $('#pigFeedText').hide();
    $('#pigLandText').hide();
  }
  //immediately hide everything
  hideAllPig();
  $('#pigProductText').show();
  //when any button is clicked make the text appear
  $('.btn').click(function() {
    //turn on paragraph based on button clicked
    switch($(this).attr("id")) {
      case "pigProduct":
        hideAllPig();
        $('#pigProductText').show();
        break;
      case "pigFeed":
        hideAllPig();
        $('#pigFeedText').show();
        break;
      case "pigLand":
        hideAllPig();
        $('#pigLandText').show();
        break;
    }
  }); //end of click function


//chicken buttons
  //function to hide ps
  function hideAllChicken() {
    $('#chickenProductText').hide();
    $('#chickenFeedText').hide();
    $('#chickenLandText').hide();
  }
  //immediately hide everything
  hideAllChicken();
  $('#chickenProductText').show();
  //when any button is clicked make the text appear
  $('.btn').click(function() {
    //turn on paragraph based on button clicked
    switch($(this).attr("id")) {
      case "chickenProduct":
        hideAllChicken();
        $('#chickenProductText').show();
        break;
      case "chickenFeed":
        hideAllChicken();
        $('#chickenFeedText').show();
        break;
      case "chickenLand":
        hideAllChicken();
        $('#chickenLandText').show();
        break;
    }
  }); //end of click function


});
