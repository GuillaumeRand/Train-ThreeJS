# Three.js

## Setup
Download [Node.js](https://nodejs.org/en/download/).
Run this followed commands:

``` bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```


# 3D physics

### For 3D physics, there are three main libraries:
#### Ammo.js

    Website: http://schteppe.github.io/ammo.js-demos/
    Git repository: https://github.com/kripken/ammo.js/
    Documentation: No documentation
    Direct JavaScript port of Bullet (a physics engine written in C++)
    A little heavy
    Still updated by a community

### Cannon.js

    Website: https://schteppe.github.io/cannon.js/
    Git repository: https://github.com/schteppe/cannon.js
    Documentation: http://schteppe.github.io/cannon.js/docs/
    Lighter than Ammo.js
    More comfortable to implement than Ammo.js
    Mostly maintained by one developer
    Hasn't been updated for many years
    There is a maintained fork

## Oimo.js

    Website: https://lo-th.github.io/Oimo.js/
    Git repository: https://github.com/lo-th/Oimo.js
    Documentation: http://lo-th.github.io/Oimo.js/docs.html
    Lighter than Ammo.js
    Easier to implement than Ammo.js
    Mostly maintained by one developer
    Hasn't been updated for 2 years

## Rapier

    Website: https://rapier.rs/
    Git repository: https://github.com/dimforge/rapier
    Documentation: https://rapier.rs/javascript3d/index.html
    Very similar to Cannon.js
    Good performance
    Currently maintained

# 2D Physics

For 2D physics, there are many libraries, but here's the most popular:
Matter.js

    Website: https://brm.io/matter-js/
    Git repository: https://github.com/liabru/matter-js
    Documentation: https://brm.io/matter-js/docs/
    Mostly maintained by one developer
    Still kind of updated

## P2.js

    Website: https://schteppe.github.io/p2.js/
    Git repository: https://github.com/schteppe/p2.js
    Documentation: http://schteppe.github.io/p2.js/docs/
    Mostly maintained by one developer (Same as Cannon.js)
    Hasn't been update for 2 years

## Planck.js

    Website: https://piqnt.com/planck.js/
    Git repository: https://github.com/shakiba/planck.js
    Documentation: https://github.com/shakiba/planck.js/tree/master/docs
    Mostly maintained by one developer
    Still updated nowadays

## Box2D.js

    Website: http://kripken.github.io/box2d.js/demo/webgl/box2d.html
    Git repository: https://github.com/kripken/box2d.js/
    Documentation: No documentation
    Mostly maintained by one developer (same as Ammo.js)
    Still updated nowadays

## Rapier

    Website: https://rapier.rs/
    Git repository: https://github.com/dimforge/rapier
    Documentation: https://rapier.rs/javascript2d/index.html
    Same library as for 3D
