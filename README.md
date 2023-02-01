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
on: [push]

jobs:
  print-version:
    runs-on: ubuntu-latest
    name: A job to print the version
    steps:
      - name: checkout repository
        uses: actions/checkout@v3
      - name: test action
        id: get-version
        uses: beaconbrigade/package-json-version@v0.3
        with:
          path: .
      - name: Print the version
        run: echo "The version was ${{ steps.get-version.outputs.version }}"
```
