**How does useMemo improve performance?**
useMemo avoids the recalculation of factorial with every render. It will be recomputed only when its dependency changes, here 'num' variable.

**When should you avoid using useMemo?**
When the calculation is not expensive and not frequently re-rendered, useMemo should be avoided as it adds complexity.

**What happens if you remove useMemo from your implementation?**
If I remove useMemo, factorial will be re-calculated even when 'Unrelated Count' button is clicked. Thus, the performance will be degraded.