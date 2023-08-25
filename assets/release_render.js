let releaseHTML = ''

releases.forEach((release) => {
  releaseHTML += `
    <h2>[${release.releaseNumber}] ${release.releaseDate}</h2>
    <ul>
  `
  release.releaseNotes.forEach((note) => {
    releaseHTML += `<li>${note}</li>`
  })

  releaseHTML += '</ul>'
})

document.getElementById('root').innerHTML = releaseHTML;