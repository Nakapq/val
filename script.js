const button = document.getElementById("myButton");
const OFFSET = 100;

document.getElementById("myButton").addEventListener("click", () => {
  alert("So you hate me");
  window.close();
});

document.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;
  const buttonBox = button.getBoundingClientRect();
  const horizontalDistanceFrom = distanceFromCenter(
    buttonBox.x,
    x,
    buttonBox.width,
  );
  const verticalDistanceFrom = distanceFromCenter(
    buttonBox.y,
    y,
    buttonBox.height,
  );
  const horizontalOffset = buttonBox.width / 2 + OFFSET;
  const verticalOffset = buttonBox.height / 2 + OFFSET;
  if (
    Math.abs(horizontalDistanceFrom) <= horizontalOffset &&
    Math.abs(verticalOffset) <= verticalOffset
  ) {
    setButtonPosition(
      buttonBox.x + (horizontalOffset / horizontalDistanceFrom) * 10,
      buttonBox.y + (verticalOffset / verticalDistanceFrom) * 10,
    );
  }
});

function setButtonPosition(left, top) {
  const windowBox = document.body.getBoundingClientRect();
  const buttonBox = button.getBoundingClientRect();

  if (distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
    left = windowBox.right - buttonBox.width - OFFSET;
  }
  if (distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
    left = windowBox.left + OFFSET;
  }
  if (distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
    top = windowBox.bottom - buttonBox.height - OFFSET;
  }
  if (distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
    top = windowBox.top + OFFSET;
  }
  button.style.left = `${left}px`;
  button.style.top = `${top}px`;
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2;
}
