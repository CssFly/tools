/*/
 * Get how much localStorage is available in browser.
 * found on: http://stackoverflow.com/questions/2989284/what-is-the-max-size-of-localstorage-values#answer-25812530
/*/

function getMaxLocalStorage()
{
  var result = { 'size': 0 }, i;
  if (!window.localStorage) { return null; }
  try 
  {
    for (i = 250; i <= 10000; i += 250) 
    {
      window.localStorage.setItem('testMaxLocalStorage', new Array((i * 1024) + 1).join('a'));
    }
  } catch (e) {
    window.localStorage.removeItem('testMaxLocalStorage');
  }
  result.size = ((i - 250)/1000).toFixed(2);      
  return result;
}

console.log('localStorage maximum: ' + getMaxLocalStorage().size + ' MB' || 'localStorage not available');

