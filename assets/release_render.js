let releaseHTML = ''

releaseHTML += '<h2>Release Notes</h2>'

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