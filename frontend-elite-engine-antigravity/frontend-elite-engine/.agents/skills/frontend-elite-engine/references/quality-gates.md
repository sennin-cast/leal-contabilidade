# Quality Gates

Severity: P0 = broken app/security/data loss; P1 = major functional, accessibility or responsive defect; P2 = visible inconsistency/minor defect; P3 = polish.

## Correctness
- Build succeeds if a build script exists.
- No new runtime/compile errors.
- Existing primary flows remain functional.
- Links, buttons and forms have meaningful behavior.

## Visual
- Clear hierarchy and readable typography.
- Consistent spacing, grid, colors and component states.
- No unintended overflow, clipping or layout shift.
- Assets are relevant, correctly cropped and optimized.

## Responsive
- Validate narrow mobile, common mobile, tablet and desktop where possible.
- No unintended horizontal scroll.
- Menus, forms, CTAs and touch targets remain usable.

## Accessibility
- Semantic landmarks and heading order.
- Keyboard access and visible focus.
- Accessible names and labels.
- Adequate contrast and reduced-motion support.

## Performance
- Avoid unnecessary dependencies and oversized assets.
- Optimize images and loading.
- Avoid expensive animations and main-thread work.

## Evidence
- Record exact commands and results.
- Record viewports actually inspected.
- Mark unavailable checks NOT RUN.
- Do not convert “not tested” into “passed”.

Do not call the result release-ready with unresolved P0/P1 issues. If a blocker cannot safely be fixed, report it clearly.
