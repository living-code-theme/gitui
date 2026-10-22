"""Capture the actual GitUI status/diff view of a throwaway repository."""


def prepare(c):
    c.git_fixture()
    for extension in ('ron', 'tmTheme'):
        c.copy(f'themes/{c.slug}.{extension}', f'.config/gitui/{c.slug}.{extension}')
    return ['gitui', '-t', c.slug + '.ron', '--logfile', c.home / 'gitui.log']


def drive(c):
    c.wait_text(r'FieldRenderer.ts')
    c.key('down')  # Move from the directory row to the changed file; Enter would stage it.
    c.wait_text(r'DEFAULT_RADIUS')
