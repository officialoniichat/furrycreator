// ... existing types
import { FurryStyle, FurryAge } from './furry';

export interface WaifuCharacter {
  style: Style;
  furryStyle?: FurryStyle;
  furryAge?: FurryAge;
  ethnicity: Ethnicity;
  age: Age;
  // ... rest of the interface remains the same
}