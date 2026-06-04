---
---
window.UPLOADED_PATTERN_FILES = [
{% for file in site.static_files %}
  {% if file.path contains '/generate/' %}
    {
      name: {{ file.name | jsonify }},
      url: {{ file.path | relative_url | jsonify }}
    },
  {% endif %}
{% endfor %}
].filter((file) => /\.(?:png|jpe?g|webp|gif|avif|svg)$/i.test(file.name));
