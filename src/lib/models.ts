
export enum SignInMethod {
  GITHUB = 'github',
  GOOGLE = 'google',
}

export enum EditorMode {
  DESIGN = 'design',
  PREVIEW = 'preview',
  PAN = 'pan',
  INSERT_DIV = 'insert-div',
  INSERT_TEXT = 'insert-text',
  INSERT_IMAGE = 'insert-image',
}

export enum MouseAction {
  MOVE = 'move',
  MOUSE_DOWN = 'mouse-down',
  DOUBLE_CLICK = 'double-click',
}

export enum MessageContextType {
  IMAGE = 'image',
  TEXT = 'text',
}

export interface ImageMessageContext {
  type: MessageContextType.IMAGE;
  content: string;
  displayName: string;
  mimeType: string;
}

export interface DomElement {
  id: string;
  tagName: string;
  frameId?: string;
  domId?: string;
  selector?: string;
  rect?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  textContent?: string;
  attributes?: Record<string, string>;
  styles?: Record<string, string>;
}

export interface ElementPosition {
  x: number;
  y: number;
}

export interface WebFrame {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
}

export interface DropElementProperties {
  type: string;
  tagName: string;
  styles: Record<string, string>;
  textContent?: string;
}

export interface FrameData {
  id: string;
  view: any;
}
