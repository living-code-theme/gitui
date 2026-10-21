// GitUI's optional RON overrides plus a matching native syntect theme.
import { textmate } from './syntax.mjs';
const roles = { selected_tab: 'accent', command_fg: 'fg', selection_bg: 'selection', selection_fg: 'fg', cmdbar_bg: 'bgAlt',
  disabled_fg: 'fgSubtle', diff_line_add: 'added', diff_line_delete: 'removed', diff_file_added: 'added', diff_file_removed: 'removed',
  diff_file_moved: 'info', diff_file_modified: 'modified', commit_hash: 'number', commit_time: 'fgMuted', commit_author: 'decorator',
  danger_fg: 'error', push_gauge_bg: 'border', push_gauge_fg: 'success', tag_fg: 'type', branch_fg: 'accent', block_title_focused: 'heading' };
export function generate(flavors) {
  return flavors.flatMap(f => [
    { path: `themes/${f.slug}.ron`, content: '(\n' + Object.entries(roles).map(([key, role]) => `    ${key}: Some("${f.r(role)}"),`).join('\n') +
      `\n    use_selection_fg: Some(true),\n    syntax: Some("${f.slug}"),\n)\n` },
    { path: `themes/${f.slug}.tmTheme`, content: textmate(f) },
  ]);
}
