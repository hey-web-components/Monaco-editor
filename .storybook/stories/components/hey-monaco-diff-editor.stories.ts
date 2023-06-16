import {Meta, StoryObj} from '@storybook/web-components';
import {html} from 'lit';

import '../../../src/hey-monaco-diff-editor';

export default {
  title: 'Components/Diff Editor',
  component: 'hey-monaco-diff-editor',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onEditorInitialized: {action: 'editorInitialized'},
    onDidUpdateDiff: {action: 'onDidUpdateDiff'},
  },
  render: (args) =>
    html`<hey-monaco-diff-editor
      style="height: 360px; width: 480px; border: 1px solid grey;"
      .original=${args.original}
      .originalLanguage=${args.originalLanguage}
      .modified=${args.modified}
      .modifiedLanguage=${args.modifiedLanguage}
      .options=${args.options}
      @editorInitialized=${args.onEditorInitialized}
      @didUpdateDiff=${args.onDidUpdateDiff}
    ></hey-monaco-diff-editor>`,
} as Meta;

export const Default: StoryObj = {
  // name: 'Default',
  args: {
    original: 'var x = 0;\nvar y = 0;\nvar z = 0;',
    originalLanguage: 'typescript',
    modified: 'var x = 0;\nvar y = 1;\nvar z = 0;',
    modifiedLanguage: 'typescript',
    options: {
      theme: 'vs',
      readOnly: false,
      renderSideBySide: true,
    },
  },
};
