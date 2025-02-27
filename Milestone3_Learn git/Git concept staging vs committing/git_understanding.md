**What is the difference between staging and committing?**
*Staging* means adding the changes but they are not permanent to the repository, whereas, *committing* means making the changes permanent to the repository. The staged changes can be reviewed before committing, and once committed the changes can be referred in future.

**Why does Git separate these two steps?**
Between staging and committing, the changes made can be reviewed and any more modifications if required can be done. After doing modifications, the changes will be staged again.
Also, multiple staged changes can be committed at once.

**When would you want to stage changes without committing?**
When multiple people are working on a project and there are multiple changes to be added, reviewed and has to be committed once. Even when working alone and not sure whether the change is final, it can be staged and committed later.