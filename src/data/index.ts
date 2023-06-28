import {ItemType} from '../@types';
import {Platform} from 'react-native';

const dataAndroid: ItemType[] = [
  {
    name: 'Cube',
    description: 'Animated cube with marble texture.',
    imageUrl:
      'https://github.com/KhronosGroup/glTF-Sample-Models/raw/master/2.0/AnimatedCube/screenshot/screenshot.gif',
    aRUrl:
      'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/AnimatedCube/glTF/AnimatedCube.gltf',
  },
  {
    name: 'Avocado',
    description: 'Cool 3d representation of an avocado.',
    imageUrl:
      'https://github.com/KhronosGroup/glTF-Sample-Models/raw/master/2.0/Avocado/screenshot/screenshot.jpg',
    aRUrl:
      'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF/Avocado.gltf',
  },
  {
    name: 'Damage helmet',
    description: 'Futurist damaged helmet 3d model.',
    imageUrl:
      'https://github.com/KhronosGroup/glTF-Sample-Models/raw/master/2.0/DamagedHelmet/screenshot/screenshot.png',
    aRUrl:
      'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF/DamagedHelmet.gltf',
  },
  {
    name: 'Lantern',
    description: 'Old street lantern.',
    imageUrl:
      'https://github.com/KhronosGroup/glTF-Sample-Models/raw/master/2.0/Lantern/screenshot/screenshot.jpg',
    aRUrl:
      'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Lantern/glTF/Lantern.gltf',
  },
  {
    name: 'Water bottle',
    description: 'Water bottle 3d model.',
    imageUrl:
      'https://github.com/KhronosGroup/glTF-Sample-Models/raw/master/2.0/WaterBottle/screenshot/screenshot.jpg',
    aRUrl:
      'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/WaterBottle/glTF/WaterBottle.gltf',
  },
];

const dataIOS: ItemType[] = [
  {
    name: 'Biplane toy',
    description: 'Amazing airplane toy that can be place on the ground.',
    imageUrl:
      'https://developer.apple.com/augmented-reality/quick-look/models/biplane/biplane.jpg',
    aRUrl:
      'https://developer.apple.com/augmented-reality/quick-look/models/biplane/toy_biplane_idle.usdz',
  },
  {
    name: 'Sneaker',
    description: 'Sneaker air force style.',
    imageUrl:
      'https://developer.apple.com/augmented-reality/quick-look/models/nike-air-force/nike-air-force.png',
    aRUrl:
      'https://developer.apple.com/augmented-reality/quick-look/models/nike-air-force/sneaker_airforce.usdz',
  },
  {
    name: 'Car toy',
    description: 'Futurist car toy that can be place on the ground.',
    imageUrl:
      'https://developer.apple.com/augmented-reality/quick-look/models/toycar/toycar.jpg',
    aRUrl:
      'https://developer.apple.com/augmented-reality/quick-look/models/toycar/toy_car.usdz',
  },
  {
    name: 'Guitar',
    description: 'Red electric guitar.',
    imageUrl:
      'https://developer.apple.com/augmented-reality/quick-look/models/stratocaster/stratocaster.jpg',
    aRUrl:
      'https://developer.apple.com/augmented-reality/quick-look/models/stratocaster/fender_stratocaster.usdz',
  },
  {
    name: 'Robot',
    description: 'Great robot cartoon representation.',
    imageUrl:
      'https://developer.apple.com/augmented-reality/quick-look/models/vintagerobot2k/vintagerobot2k.jpg',
    aRUrl:
      'https://developer.apple.com/augmented-reality/quick-look/models/vintagerobot2k/robot_walk_idle.usdz',
  },
];
export default Platform.OS === 'android' ? dataAndroid : dataIOS;
