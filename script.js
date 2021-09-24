// NBA NOW
const BASE_URL = 'https://www.balldontlie.io/api/v1/players/'
let nbaData;

// Cached Element Ref
const $firstName = $('#first');
const $lastName = $('#last')
const $team = $('#team')
const $position = $('#position')
const $heightFeet = $('#heightFt')
const $heightInches = $('#heightIn')
const $form = $('form');
const $firstInput = $('#firstInput');
const $lasttInput = $('#lastInput');


$form.on('submit', handleGetData)

//FUNCTIONS
function handleGetData(event) {
  event.preventDefault();
  
  const $firstName = $firstInput.val();
  const $lastName = $lasttInput.val();
    $firstInput.val("");
    $lasttInput.val("");
  $.ajax(`${BASE_URL}?search=${$firstName}_${$lastName}`).then(function (data) {
    nbaData = data,
    render ()
  }
  , function (error) {
    console.log(error) ;
    });
  }
  function render() {
    $firstName.text(nbaData.data[0].first_name);
    $lastName.text(nbaData.data[0].last_name);
    $team.text(nbaData.data[0].team.abbreviation);
    $position.text(nbaData.data[0].position);
    $heightFeet.text(nbaData.data[0].height_feet);
    $heightInches.text(nbaData.data[0].height_inches);

    console.log(nbaData)
  }










