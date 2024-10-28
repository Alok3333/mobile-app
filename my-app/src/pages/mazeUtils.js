// mazeUtils.js
export const generateMaze = (width, height) => {
    const maze = Array.from({ length: height }, () => Array(width).fill(1));
  
    const carve = (x, y) => {
      maze[y][x] = 0;
  
      const directions = [
        { dx: 2, dy: 0 }, // East
        { dx: -2, dy: 0 }, // West
        { dx: 0, dy: 2 }, // South
        { dx: 0, dy: -2 }, // North
      ];
  
      for (let i = directions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [directions[i], directions[j]] = [directions[j], directions[i]];
      }
  
      directions.forEach(({ dx, dy }) => {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && ny >= 0 && nx < width && ny < height && maze[ny][nx] === 1) {
          maze[y + dy / 2][x + dx / 2] = 0; // Carve a path
          carve(nx, ny);
        }
      });
    };
  
    carve(0, 0);
    return maze;
  };
  