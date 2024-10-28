// Create and style the grey ball element dynamically
const greyBall = document.createElement('div');
greyBall.classList.add('grey-ball');
document.body.appendChild(greyBall);

// Update the position of the grey ball based on mouse movement
document.addEventListener('mousemove', (event) => {
  
  // Ensure the grey ball does not exceed the viewport boundaries
  const ballSize = greyBall.offsetWidth + 0.5;
  greyBall.style.left = `${event.pageX - ballSize}px`;
  greyBall.style.top = `${event.pageY}px`;
});
