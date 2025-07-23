
import { 
  ArrowRight, 
  Check, 
  ChevronDown, 
  MousePointer, 
  LogOut, 
  File, 
  FilePlus, 
  Github, 
  Chrome, 
  Hand, 
  Image, 
  Square, 
  Terminal, 
  Type, 
  Grid3X3 
} from 'lucide-react';

export const Icons = {
  ArrowRight,
  Check,
  ChevronDown,
  CursorArrow: MousePointer, // Using MousePointer instead of CursorArrow
  Exit: LogOut, // Using LogOut instead of Exit
  File,
  FilePlus,
  GitHub: Github, // Using Github instead of GitHub
  Google: Chrome, // Using Chrome as a substitute for Google
  Hand,
  Image,
  Square,
  Terminal,
  Text: Type, // Using Type instead of Text
  ViewGrid: Grid3X3, // Using Grid3X3 instead of ViewGrid
  OnlookTextLogo: () => (
    <svg width="100" height="24" viewBox="0 0 100 24" fill="none">
      <text x="0" y="18" className="text-lg font-bold fill-current">Onlook</text>
    </svg>
  ),
};
