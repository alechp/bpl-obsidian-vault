---
tags: ["#template/daily"]
creation_date: <% tp.file.creation_date() %>
modification_date: <% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss") %>
---

# <% tp.file.title %>
<% tp.file.rename(tp.file.title) %>

```dataviewjs
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

```

### Notes


### Tasks
```todoist
name: <% tp.user.get_when() %>
filter: "!(due today | @type-routine | @type-recurring) & (@<% tp.user.get_when("label") %> | @wynn | @top)"
group: true
```