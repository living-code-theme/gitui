<!-- living-code-readme:1 -->
# 🌳 Living Code for GitUI

**Calm slate. Living color.** Living Code for GitUI: RON interface themes and matching native TextMate syntax palettes for commit, status and diff views.

[Installation](#installation) · [Flavors](#flavors) · [Configuration](#configuration) · [All ports](https://github.com/living-code-theme)

## Previews

Real application screenshots have not been captured yet.

## Installation

```sh
git clone https://github.com/living-code-theme/gitui.git
cd gitui
```

On Linux or macOS with the default location:

```sh
mkdir -p "${XDG_CONFIG_HOME:-$HOME/.config}/gitui"
cp themes/*.ron themes/*.tmTheme "${XDG_CONFIG_HOME:-$HOME/.config}/gitui/"
gitui -t living-code-night.ron
```

On Windows, use `%APPDATA%\gitui`. Both the RON and corresponding `.tmTheme` file must be in that same directory.

## Flavors

Expand a flavor for its full-size preview and activation instructions.

<details data-lc-flavor="night">
<summary><strong>Night</strong> · Dark · full palette</summary>

A real application capture is not available yet.

```sh
gitui -t living-code-night.ron
```

</details>

<details data-lc-flavor="frost">
<summary><strong>Frost</strong> · Dark · softer chroma</summary>

A real application capture is not available yet.

```sh
gitui -t living-code-frost.ron
```

</details>

<details data-lc-flavor="paper">
<summary><strong>Paper</strong> · Light · near-white slate</summary>

A real application capture is not available yet.

```sh
gitui -t living-code-paper.ron
```

</details>

<details data-lc-flavor="signal">
<summary><strong>Signal</strong> · Dark · teal accent</summary>

A real application capture is not available yet.

```sh
gitui -t living-code-signal.ron
```

</details>

## Configuration

To make a flavor the default, copy its `.ron` file to `theme.ron` in the GitUI configuration directory; keep the named `.tmTheme` there too. Every override uses the required `Some(...)` representation. The RON `syntax` setting is the TextMate filename stem. Syntax palettes distinguish values, variables, functions, types, properties, comments and diff scopes.

## Compatibility

Requires GitUI’s optional-override RON format introduced in 0.23, plus custom TextMate syntax loading. Verified against the pinned upstream `Theme` fields. GitUI does not expose a general body foreground/background override: configure a matching Living Code terminal palette for unpainted areas, especially with Paper. The port includes UI and syntax files rather than merely renaming an existing generic theme.

## Contributing

Found a problem? [Open an issue](https://github.com/living-code-theme/gitui/issues/new/choose) with the app version, the flavor and a screenshot. Want Living Code somewhere else? [Request a port](https://github.com/living-code-theme/core/issues/new?template=port-request.yml).

Pull requests are welcome. Keep this README, `port.json` and `images/` in sync, and use real screenshots of the app, never mockups.

🦎 **One chameleon, many habitats.** Part of [Living Code](https://github.com/living-code-theme).

## License

[MIT](LICENSE) © Elliot Luque
