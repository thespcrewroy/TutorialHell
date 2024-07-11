### [Boids](https://en.wikipedia.org/wiki/Boids)

- Are a group of cells that can move
- Each boid has position, velocity, and acceleration
- Every boid has a perception radius where they can sense other boids
- Rules of boids: seperation, alignment, cohesion
  - Seperation: looks at all the other boids, and tries to move away if it is too close to another boid. Applies force on the direction of the other boids within the perception radius
  - Cohesion: every boid wants to get a little close to its neighbors as well as further away. This is done by taking the average position of all the neighbors to figure out the center of mass. The boid follows the center of mass to maintain cohesion.
  -

### [Processing Programming Language](https://processing.org/download)

- Let's you initialize computer graphics
