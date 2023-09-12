function changeColor(color) 
{
            var textElement = document.getElementById('text');
            
            if (color === 'blue')
            {
                textElement.style.color = 'blue';
            } else if (color === 'green') {
                textElement.style.color = 'green';
            }
        }