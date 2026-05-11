# GitFlow, environments, and GitHub workflow

How code moves from a developer machine to production, and how that ties to **GitHub Issues** and **GitHub Projects** so every change stays traceable and reviewable.

## Environment chain

The agreed deployment and validation path is:

**local → dev → QA → prod**

| Environment | Role |
| --- | --- |
| **Local** | Developer build and testing; feature branches start here. |
| **Dev** | Team integration: catches conflicts and regressions early. |
| **QA** | Functional and quality validation before end users see the change. |
| **Prod** | Stable environment for the business or customers. |

Promotions between environments should be **explicit** (agreed merge or deploy). Skipping stages is only for documented, approved exceptions.

## Task management on GitHub

- **Issues** are the unit of work: every meaningful change should trace back to an issue (or be explicitly linked in the PR).
- **GitHub Projects** is the board (columns, priorities, milestones)—the shared view of what is in progress and what comes next.
- **Short iterations:** do not plan “sprints” longer than **two weeks**; each cycle needs **clear, measurable goals** (what ships, what is out of scope).
- **Realistic scope:** fewer items done well beats large batches that never finish cleanly.
- **Transparency:** keep the project board current (issue state, blockers, dependencies) so dev, QA, and product share one picture.

## Branches, PRs, and one task per branch

- **One branch = one concrete task** (one issue or an agreed equivalent). Avoid mixing several topics on one branch or in one PR.
- **Branch names tied to the task:** the exact pattern (prefixes, slug, issue number) is in [Development conventions — Git: branches and commits](./conventions#git-branches-and-commits).
- **Pull requests** should reference the issue (`Closes #123`, `Refs #123`, etc.) to close the loop between code and tracking.

## Typical flow (summary)

1. Define or pick up the task in **Issues / Projects**.
2. Create a **branch** from the agreed base (e.g. `develop` or `main`, per application repo policy) with a name linked to the issue.
3. Work and commit in **local**; open a PR to the integration branch that feeds **dev**.
4. After **dev** validation, promote to **QA** per the team’s release process.
5. After QA sign-off, promote to **prod**.

Long-lived branch layout (`main`, `develop`, `release/*`, `hotfix/*`) is defined per application repository; this page is the **shared frame** (environments, GitHub usage, and one-branch-per-task rules).

---

*For naming conventions (branches, commits, files), see [conventions](./conventions).*
