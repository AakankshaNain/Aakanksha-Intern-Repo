# What happens if we modify state directly instead of using setState?

Modifying the state directly will not work because when the component changes its state, React will not be able to identify it. Thus, the updates will not be tracked.