import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { resolveAll } from '../scripts/palette.mjs';
import { keys, hexColors, assertContrast } from './helpers.mjs';
const fixture = JSON.parse(await readFile(new URL('./fixtures/upstream.json', import.meta.url)));
const read = path => readFile(new URL('../' + path, import.meta.url), 'utf8');
import plist from 'plist';

function parseRon(source) {
  const lines = source.trim().split('\n'); assert.equal(lines.shift(), '('); assert.equal(lines.pop(), ')');
  const out = {};
  for (const line of lines) {
    const match = line.match(/^    ([a-z_]+): Some\(("[^"\n]*"|true|false)\),$/);
    assert.ok(match, 'Invalid generated RON: ' + line); assert.ok(!(match[1] in out), 'Duplicate override');
    out[match[1]] = JSON.parse(match[2]);
  }
  return out;
}
for (const f of resolveAll()) test(f.name + ': GitUI optional RON and matching native syntax file', async () => {
  const t = parseRon(await read('themes/' + f.slug + '.ron'));
  for (const key of Object.keys(t)) assert.ok(fixture.fields.includes(key), 'Unknown GitUI field: ' + key);
  assert.equal(t.syntax, f.slug); assert.equal(t.use_selection_fg, true);
  assert.equal(t.diff_line_add, f.r('added')); assert.equal(t.diff_line_delete, f.r('removed'));
  assert.equal(t.selection_fg, f.r('fg')); assertContrast(t.selection_fg, t.selection_bg);
  hexColors(Object.fromEntries(Object.entries(t).filter(([key]) => !['syntax', 'use_selection_fg'].includes(key))));
  const syntax = plist.parse(await read('themes/' + t.syntax + '.tmTheme'));
  assert.equal(syntax.name, f.name); assert.equal(syntax.settings[0].settings.foreground, f.r('fg'));
  const scope = name => syntax.settings.find(rule => rule.scope?.split(', ').includes(name))?.settings;
  assert.equal(scope('constant.language').foreground, f.r('constant'));
  assert.equal(scope('variable.other.constant').foreground, f.r('variable'));
  assert.equal(scope('entity.name.function').foreground, f.r('function'));
});
