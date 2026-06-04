---
---
window.UPLOADED_PATTERN_FILES = [
{% for file in site.static_files %}
  {% if file.path contains '/assets/images/patterns/generated/' %}
    {
      name: {{ file.name | jsonify }},
      url: {{ file.path | relative_url | jsonify }}
    },
  {% endif %}
{% endfor %}
].filter((file) => /\.png$/i.test(file.name) && !/^pattern_\d+\.svg$/i.test(file.name));
