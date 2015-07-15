<% commits.forEach(function(commit) { %>- <% if (commit.label) { %>**<%= commit.label %>** <% } %><%= commit.subject %> ([<%= commit.hash_abbr %>](https://github.com/pixelant/pixelant-fe-starter-kit/commit/<%= commit.hash_abbr %>))
<% }); %>
