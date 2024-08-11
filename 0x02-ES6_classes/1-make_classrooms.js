// A Function that imports a class and return an array of 3 ClassRoom
import ClassRoom from './0-classroom';

export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
