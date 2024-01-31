function getDailyLinks() {
  const currFile = dv.current().file

  // Fetch all notes ordered by date; from the daily note directory
  const pages = await dv.pages('"{01000} Daily"')
    .sort ( p => p.file.day )
  // Variables used when looking for previous and next links
  let thisPrevious = null
  let thisNext = null
  let previous = null   // Intermediate candidate for previous link

  // Loop through looking for next and previous links
  for (let page of pages) {

    if (previous && (page.file.path === currFile.path) ) {
      thisPrevious = previous.file
    } 

    if (previous && (previous.file.path === currFile.path) ) {
      thisNext = page.file
      break
    }
    // We've not found both, so update previous candidate
    // and lets loop again
    previous = page 
  }

  // Output the links
  dv.span([
      thisPrevious ? thisPrevious.link : "No previous",
      currFile.name,
      thisNext ? thisNext.link : "No next"
    ].join(" | "))
}

module.exports = getDailyLinks;
