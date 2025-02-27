**What does each command do?**
*checkout*: I modified Learn_GIT.txt file on main branch and then used checkout command to undo the change.
*cherry-pick*: I modified Learn_GIT.txt on another branch Git_Practice and using cherry-pick command, I only modified the same file in the main branch.
*log*: I used 'git log' and 'git log --oneline' to check the last commits in the branch.
*blame*: This command helped to see the commit hash, who did the commit and when it was done. 

**When would you use it in a real project?**
These commands can be used when some change has to be reverted (checkout), only one committed change has to be moved to the other branch (cherry-pick), see the commit log history (log), and see who made the commits (blame).

**What surprised you while testing these commands?**
The cherry-pick command was something new, picking single change from one branch to another.