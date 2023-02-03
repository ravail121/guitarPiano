import MidiNumbers from './MidiNumbers';

function createKeyboardShortcuts({ firstNote, lastNote, keyboardConfig }) {
  let currentMidiNumber = firstNote;
  let naturalKeyIndex = 0;
  let keyboardShortcuts = [];

  while (
    // There are still keys to be assigned
    naturalKeyIndex < keyboardConfig.length &&
    // Note to be assigned does not surpass range
    currentMidiNumber <= lastNote
  ) {
    const key = keyboardConfig[naturalKeyIndex];
    const { isAccidental } = MidiNumbers.getAttributes(currentMidiNumber);
    if (isAccidental) {
      keyboardShortcuts.push({
        key: key.flat,
        midiNumber: currentMidiNumber,
      });
    } else {
      keyboardShortcuts.push({
        key: key.natural,
        midiNumber: currentMidiNumber,
      });
      naturalKeyIndex += 1;
    }
    currentMidiNumber += 1;
  }
  return keyboardShortcuts;
}

export default {
  create: createKeyboardShortcuts,
  // Preset configurations
  BOTTOM_ROW: [
    { natural: 'z', flat: 'a', sharp: 's' },
    { natural: 'x', flat: 's', sharp: 'd' },
    { natural: 'c', flat: 'd', sharp: 'f' },
    { natural: 'v', flat: 'f', sharp: 'g' },
    { natural: 'b', flat: 'g', sharp: 'h' },
    { natural: 'n', flat: 'h', sharp: 'j' },
    { natural: 'm', flat: 'j', sharp: 'k' },
    { natural: ',', flat: 'k', sharp: 'l' },
    { natural: '.', flat: 'l', sharp: ';' },
    { natural: '/', flat: ';', sharp: "'" },
  ],
  HOME_ROW: [
    { natural: 'c', flat: 'q', sharp: 'w',key:'a' },
    { natural: 'd', flat: 'w', sharp: 'e',key:'s' },
    { natural: 'e', flat: 'e', sharp: 'r' ,key:'d'},
    { natural: 'f', flat: 'r', sharp: 't' ,key:'f'},
    { natural: 'g', flat: 't', sharp: 'y' ,key:'g'},
    { natural: 'a', flat: 'y', sharp: 'u' ,key:'h'},
    { natural: 'b', flat: 'u', sharp: 'i' ,key:'j'},
    { natural: 'c', flat: 'i', sharp: 'o' ,key:'k'},
    { natural: 'd', flat: 'o', sharp: 'p' ,key:'l'},
    { natural: 'e', flat: 'p', sharp: '[' ,key:';'},
    { natural: "f", flat: '[', sharp: ']' ,key:"'"},
  ],
  QWERTY_ROW: [
    { natural: 'q', flat: '1', sharp: '2' },
    { natural: 'w', flat: '2', sharp: '3' },
    { natural: 'e', flat: '3', sharp: '4' },
    { natural: 'r', flat: '4', sharp: '5' },
    { natural: 't', flat: '5', sharp: '6' },
    { natural: 'y', flat: '6', sharp: '7' },
    { natural: 'u', flat: '7', sharp: '8' },
    { natural: 'i', flat: '8', sharp: '9' },
    { natural: 'o', flat: '9', sharp: '0' },
    { natural: 'p', flat: '0', sharp: '-' },
    { natural: '[', flat: '-', sharp: '=' },
  ],
};
