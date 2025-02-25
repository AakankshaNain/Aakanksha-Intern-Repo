**Why is pushing directly to main problematic?**
Once the changes pushed directly to the main branch, without reviewing and comparing changes with the other branches can overwrite the correct changes. This increase the chances of bugs.

**How do branches help with reviewing code?**
When working on a group project, all the developers can work on different functionalities on their respective branches. Before finally pushing the changes to the main branch, the developers can pull request and review the code changes.

**What happens if two people edit the same file on different branches?**
If the same file is edited on different branches:
1. *Same line changed*: Git will show merge conflict, and the change can be finalized.
2. *Different lines*: Git will merge the changes.