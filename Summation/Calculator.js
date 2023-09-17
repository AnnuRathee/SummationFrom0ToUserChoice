let calculateSumBtn = document.querySelector('#CalculateYourOwn button' );
function calculateSum()
{
  let usernumber = document.getElementById('digit');
  let enterednumber = usernumber.value;

  let sumup = 0;

  for (let i = 0; i <= enterednumber; i++)
  {
    sumup = sumup + i
  }
   let output = document.getElementById('Result');
   output.textContent = sumup;
   output.style.display = 'block';
}
calculateSumBtn,addEventListener('click' , calculateSum);