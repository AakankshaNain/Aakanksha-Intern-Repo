**What does git bisect do?**
Git bisect helps to debug to find the commit in which the bug is present. It follows binary search and asks us to find a good and bad commit. It saves time to manually review each and every commit, which can be a difficult task in the case of large number of commits.

**When would you use it in a real-world debugging situation?**
1. When there are a large number of commits and manually it is hard to find which commit introduced the bug.
2. When multiple developers are working on the same repository, it will be helpful to easily find the commit where the bug occurred.

**How does it compare to manually reviewing commits?**
1. Manually reviewing the commits requires more time, whereas git bisect is more efficient and requires less time to review.
2. Git bisect uses binary search, whereas manually reviewing is more complex as each commit is manually reviewed.
3. Also, manually reviewing requires manual testing, and git bisect can have automated tests.