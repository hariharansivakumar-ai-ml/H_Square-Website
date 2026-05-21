import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { colorInput } from '@sanity/color-input';
import { schemaTypes } from './schema';

export default defineConfig({
  name: 'default',
  title: 'LandsnDeeds Studio',

  projectId: '9xy3tg1p',
  dataset: 'production',

  basePath: '/studio',

  plugins: [
    structureTool(),
    visionTool(),
    colorInput(),
  ],

  schema: {
    types: schemaTypes,
  },
});
