
export default function createInt8TypeArray(length, position, value) {
  // Create a new ArrayBuffer with the given length
  const buffer = new ArrayBuffer(length);

  // Create a dataview  view of the buffer
  const dataView = new DataView(buffer);

  // Check if the position is within the range of the buffer
  if (position < 0 || position >= buffer.byteLength) {
    throw new Error('Position outside range');
  }

  // Set the value at the specific position
  dataView.setInt8(position, value);
  return dataView;
}

