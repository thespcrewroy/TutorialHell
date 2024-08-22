# Learn Boid Flocking Genetic Algorithm

![Tutorial](https://img.shields.io/badge/Tutorial-lightorange)

## [Boids](https://en.wikipedia.org/wiki/Boids)

- **Are a group of cells that can move**
- **Each boid has position, velocity, and acceleration**
- **Every boid has a perception radius where they can sense other boids**
- **_Rules of boids_**: **seperation, alignment, cohesion**
  - **_Seperation_**: **looks at all the other boids, and tries to move away if it is too close to another boid. Applies force on the direction of the other boids within the perception radius**
  - **_Cohesion_**: **every boid wants to get a little close to its neighbors as well as further away. This is done by taking the average position of all the neighbors to figure out the center of mass. The boid follows the center of mass to maintain cohesion.**
  - **_Alignment_**: **every boid looks at the other boids and tries to determine the angle of difference. The boid wants to rotate to match the orientation of all the boids in its perception radius. When you sum up the directional forces, you get one alignment value which determines how much the boid should turn.**

## [Processing Programming Language](https://processing.org/download)

- **Let's you initialize computer graphics**
- **Utilizes Java syntax**
