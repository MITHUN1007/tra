
export const Routes = {
  HOME: '/',
  LOGIN: '/login',
  PROJECTS: '/projects',
  PROJECT: (id: string) => `/project/${id}`,
};

export const Hotkey = {
  SELECT: {
    description: 'Select tool',
    key: 'v',
  },
  PAN: {
    description: 'Pan tool',
    key: 'h',
  },
  INSERT_DIV: {
    description: 'Insert div',
    key: 'd',
  },
  INSERT_TEXT: {
    description: 'Insert text',
    key: 't',
  },
};

export const DefaultSettings = {
  IMAGE_FOLDER: 'public/images',
};

export const EditorAttributes = {
  DATA_ONLOOK_INSTANCE_ID: 'data-onlook-instance-id',
  DATA_ONLOOK_COMPONENT_NAME: 'data-onlook-component-name',
};
