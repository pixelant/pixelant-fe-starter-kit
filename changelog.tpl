<% commits.forEach(function(commit) { %>- <% if (commit.label) { %>**<%= commit.label %>** <% } %><%= commit.subject %> ([<%= commit.hash_abbr %>](https://github.com/dmh/testgen/commit/<%= commit.hash_abbr %>))
<% }); %>
