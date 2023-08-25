const releases = [
  {
    releaseNumber: '1.1.0',
    releaseDate: '8/25/2023',
    releaseNotes: [
      'Added header / title to release notes page'
    ]
  },
  {
    releaseNumber: '1.0.9',
    releaseDate: '8/25/2023',
    releaseNotes: [
      'Improved security in gateway decryption',
      'Moved release data to release.js',
      'Release versions are now rendered from release.js',
      'Moved version number to release.js',
      'Updated styles in release.html'
    ]
  },
  {
    releaseNumber: '1.0.8',
    releaseDate: '8/23/2023',
    releaseNotes: [
      'Added more servers to the servers list',
      'Added more functionality to the top bar'
    ]
  },
  {
    releaseNumber: '1.0.7',
    releaseDate: '8/21/2023',
    releaseNotes: [
      'Added a way to close rdp sessions without reloading window',
      'Moved the syncing program files indicator to the center',
      'Changed syncing program files text to Downloading software...'
    ]
  },
  {
    releaseNumber: '1.0.6',
    releaseDate: '8/18/2023',
    releaseNotes: [
      'Added dates to the version numbers in release.html'
    ]
  },
  {
    releaseNumber: '1.0.5',
    releaseDate: '8/18/2023',
    releaseNotes: [
      'Made so that the page matches your system theme'
    ]
  },
  {
    releaseNumber: '1.0.4',
    releaseDate: '8/18/2023',
    releaseNotes: [
      'Added simple light theme',
      'Made a way to switch between light and dark',
      'Added a back button to the release section'
    ]
  },
  {
    releaseNumber: '1.0.3',
    releaseDate: '8/18/2023',
    releaseNotes: [
      'Updated gateway code',
      'Added more gateways'
    ]
  },
  {
    releaseNumber: '1.0.2',
    releaseDate: '8/18/2023',
    releaseNotes: [
      'Changed the UI to dark theme',
      'Made select options and other various things on the screen easier to read'
    ]
  },
  {
    releaseNumber: '1.0.1',
    releaseDate: '8/17/2023',
    releaseNotes: [
      'Removed version number from document title',
      'Added information above login button',
      'Added release file and release notes link'
    ]
  },
  {
    releaseNumber: '1.0.0',
    releaseDate: '8/17/2023',
    releaseNotes: [
      'First Stable Release'
    ]
  }
]

const currentRelease = releases[0].releaseNumber

document.getElementById('release').innerHTML = `
  VATLNetwork WebRDP Client v${currentRelease}
  <a href="release.html" >Release Notes</a>
`