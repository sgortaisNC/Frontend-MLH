---
name: feedback-no-coauthored-by
description: Ne pas ajouter Co-Authored-By dans les messages de commit
metadata:
  type: feedback
---

Ne jamais ajouter la ligne `Co-Authored-By: Claude ...` dans les messages de commit git.

**Why:** L'utilisateur ne veut pas cette mention dans l'historique git.

**How to apply:** À chaque commit, omettre complètement la ligne Co-Authored-By.
