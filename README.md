# Flutter Package Updater

Forked from https://github.com/tianhaoz95/update-flutter-packages.

Modified for using [dapackage](https://pub.dev/packages/dapackages) command to update pubspec.yaml file besides pubspec.lock

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

![.github/workflows/test-drive.yml](https://github.com/tianhaoz95/update-flutter-packages/workflows/.github/workflows/test-drive.yml/badge.svg?branch=master)
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/tianhaoz95/update-flutter-packages) 

## Background

[Dependabot](https://dependabot.com/) is a great way to automatically keep dependencies up-to-date, but the support for Flutter is still under construction (hopefully).

## Solution

For the time being, I put together this action to automate package updating for Flutter projects.

The action scans the default (master) branch and opens pull requests to update all packages defined in `pubspec.yml`.

The actions requires:
* `subosito/flutter-action@v1`
* `actions/setup-java@v1`
* `actions/checkout@v1`

## Example

```yml
on:
  schedule:
    - cron: 0 2 * * *
jobs:
  test:
    name: example Flutter package updater
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: actions/setup-java@v1
        with:
          java-version: '12.x'
      - uses: subosito/flutter-action@v1
        with:
          flutter-version: '1.12.13+hotfix.5'
          channel: 'stable'
      - name: run flutter package updater
        uses: joshuaarus/update-flutter-packages@v0.0.1
        with:
          flutter-project: './sample_flutter_app'
          git-email: 'tianhaoz@umich.edu'
          git-name: 'Tianhao Zhou'
          token: ${{ secrets.TIANHAOZ_GITHUB_TOKEN }}
```

## Happy hacking!

Spend your time on what matters, let automation take care the rest ;)
## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://tianhaoz.com"><img src="https://avatars3.githubusercontent.com/u/16887772?v=4" width="100px;" alt=""/><br /><sub><b>Tianhao Zhou</b></sub></a><br /><a href="https://github.com/tianhaoz95/update-flutter-packages/commits?author=tianhaoz95" title="Code">💻</a></td>
    <td align="center"><a href="http://telegram.me/ilteoood"><img src="https://avatars0.githubusercontent.com/u/6383527?v=4" width="100px;" alt=""/><br /><sub><b>Matteo Pietro Dazzi</b></sub></a><br /><a href="https://github.com/tianhaoz95/update-flutter-packages/commits?author=ilteoood" title="Code">💻</a></td>
    <td align="center"><a href="https://preet.website"><img src="https://avatars0.githubusercontent.com/u/27439197?v=4" width="100px;" alt=""/><br /><sub><b>Preet Parekh</b></sub></a><br /><a href="https://github.com/tianhaoz95/update-flutter-packages/commits?author=preetjdp" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!