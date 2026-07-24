const patternElement = document.getElementById("pattern");

if (!patternElement) {
  throw new Error("Pattern element not found");
}

const countY = Math.ceil(window.innerHeight / 40) + 2;
const countX = Math.ceil(window.innerWidth / 48) + 2;

for (let i = 0; i < countY; i++) {
  for (let j = 0; j < countX; j++) {
    const hexagon = document.createElement("div");
    hexagon.style.cssText = `
      width: 44px;
      height: 50px;
      position: absolute;
      top: ${i * 40}px;
      left: ${j * 48 + ((i * 24) % 48)}px;
      background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODciIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgODcgMTAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMi4xOTg3MyAyNi4xNTQ3TDQzLjUgMi4zMDk0TDg0LjgwMTMgMjYuMTU0N1Y3My44NDUzTDQzLjUgOTcuNjkwNkwyLjE5ODczIDczLjg0NTNWMjYuMTU0N1oiIGZpbGw9IiMxMzEyMTciIHN0cm9rZT0iIzEzMTIxNyIgc3Ryb2tlLXdpZHRoPSI0Ii8+Cjwvc3ZnPgo=');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      opacity: 1;
      pointer-events: none;
    `;

    patternElement.appendChild(hexagon);
  }
}

let mousePosition = {
  x: 0,
  y: 0,
};

document.addEventListener("mousemove", (mouse) => {
  mousePosition = {
    x: mouse.clientX,
    y: mouse.clientY,
  };
});

document.addEventListener(
  "scroll",
  () => {
    mousePosition = {
      x: mousePosition.x,
      y: mousePosition.y,
    };
  },
  { passive: true },
);

const loop = () => {
  const gradientElement = document.getElementById("gradient");

  if (!gradientElement) {
    return;
  }

  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  gradientElement.style.transform = `translate(${mousePosition.x + scrollX}px, ${mousePosition.y + scrollY}px)`;

  window.requestAnimationFrame(loop);
};

// Start the animation loop
window.requestAnimationFrame(loop);
