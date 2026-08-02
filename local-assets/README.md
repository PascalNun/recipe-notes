# Local Asset Workspace

This directory keeps high-quality recipe artwork outside Git while making its purpose explicit. Only this guide is versioned; all production files below it remain local.

```text
local-assets/
  masters/<recipe>/source/   original generated or photographed sources
  masters/<recipe>/alpha/    approved full-resolution transparent masters
  working/<recipe>/          chroma-key, masking, and conversion variants
  previews/<recipe>/         contact sheets and review exports
```

Use `tmp/` only for disposable QA screenshots and reproducible conversion output. Move an approved source or full-resolution alpha file into `masters/` before clearing temporary work.

The website consumes only the approved WebP derivatives stored beside each recipe under `src/content/recipes/<recipe>/assets/`.
