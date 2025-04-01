**What is the purpose of CI/CD?**
1. Continuous Integration (CI) ensures regular testing on the newly integrated code, which enables detecting bugs, if any, due to the new changes. This helps an early resolution of the identified bugs.
2. Continuous Deployment/Delivery (CD) ensures faster delivery of the tested code by automating the deployment process.

**How does automating style checks improve project quality?**
1. This reduces the manual errors while testing and deploying the tested code.
2. Since the formatting tests are automated, this ensures that the code is integrated with the proper format.
3. The code reviews are handled easily as the style checks are automated.

**What are some challenges with enforcing checks in CI/CD?**
1. The large number of checks can hinder the performance of the CI/CD pipelines.
2. There can be checks that are false positives as functionality may be correct.
3. The checks can be too difficult, and then the developers have to find alternatives and remove these checks.
4. If checks find errors and logging is not clear, the developers may not be able to resolve the issue on time.

**How do CI/CD pipelines differ between small projects and large teams?**
1. In small projects, there are fewer steps, thus focusing on speed, whereas for large teams there are multiple checks involved.
2. The cases involved in small projects are unit cases, and the large teams involve unit cases along with integration and end-to-end functionality checks.
3. The deployment can be more manual for small projects, but for large projects, automated processes are important with strict security checks.
