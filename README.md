# `package-json-version`

This action gets the version number in your package.json for use in other steps.

## Inputs

### `path`

The directory your `package.json` is in. Default `.`.

## Outputs

### `version`

The version in your `package.json`

## Example Usage

```yaml
uses: beaconbrigade/package-json-version@v0.1
with:
  path: 'path/to/node/project'
```
