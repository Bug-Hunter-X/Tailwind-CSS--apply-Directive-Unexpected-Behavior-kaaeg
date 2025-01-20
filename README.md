# Tailwind CSS @apply Directive Unexpected Behavior

This repository demonstrates an uncommon bug encountered when using Tailwind CSS's `@apply` directive.  The issue involves unexpected behavior in nested contexts, where styles defined using `@apply` are not consistently applied.

## Bug Description

The `@apply` directive, designed for applying pre-defined utility classes, can exhibit erratic behavior when used within nested elements, especially when interacting with other CSS rules. In certain scenarios, the expected styling might not be rendered correctly.

## Reproduction Steps

1. Clone this repository.
2. Run a Tailwind CSS build process (if necessary).
3. Open `bug.html` in a web browser.
4. Observe that the nested `<div>` with the `@apply` directive does not display the expected red background and padding.

## Solution

The solution often involves explicitly specifying the order of styles or addressing potential conflicts between different CSS rules. This usually involves adjusting the order of classes or refactoring the code structure.