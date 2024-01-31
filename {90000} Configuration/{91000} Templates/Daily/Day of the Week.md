---
tags: ["#template/default"]
creation_date: <% tp.file.creation_date() %>
modification_date: <% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss") %>
---

# <% tp.file.title %>
<% tp.file.rename(tp.file.title) %>
```todoist
name: <% tp.user.get_when() %>
filter: "due today | @<% tp.user.get_when("label") %> | @wynn | @top"
group: true
```